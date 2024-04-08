import React, { useContext, useEffect, useRef, useState } from "react";
import { FaCamera } from "react-icons/fa";
import { imageDb } from "../config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

import { MultilevelContext } from "../context/MultilevelContext";

const CreateProfile = ({ onNext, onPrevious, formData, setFormData }) => {
  const [location, setLocation] = useState("");
  const [isButtonEnable, setIsButtonEnable] = useState(false);
  const inputRef = useRef();
  const [img, setImg] = useState("");
  const { imageFileUrl, setImageFileUrl } = useContext(MultilevelContext);

  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const handleChange = (e) => {
    setLocation(e.target.value);
    if (location !== "") setIsButtonEnable(true);

    setFormData({ ...formData, location: e.target.value });
  };
  const handleImage = () => {
    console.log("Image");
    const fileName = new Date().getTime() + "-" + img.name;
    const storageRef = ref(imageDb, fileName);
    const uploadTask = uploadBytesResumable(storageRef, img);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImageUploadProgress(progress.toFixed(0));
      },
      (error) => {
        setImageUploadProgress(null);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          setImageUploadProgress(null);
          setImageFileUrl(downloadUrl);
          setFormData({ ...formData, avatar: downloadUrl });
        });
      }
    );
  };

  useEffect(() => {
    setTimeout(() => {}, 500);
    if (location === "") setIsButtonEnable(true);
    else setIsButtonEnable(false);
  }, [location]);
  return (
    <div className="h-[90vh] w-full  flex flex-col justify-evenly bg-zinc-700 rounded-xl">
      <h1 className="text-white text-2xl font-extrabold mx-auto">
        Create Profile
      </h1>
      <div className="h-[60%] w-[60%] mx-auto flex flex-col items-center justify-evenly">
        <input
          type="file"
          accept="image/*"
          className="h-52 w-52 absolute"
          onChange={(e) => setImg(e.target.files[0])}
          ref={inputRef}
          hidden
        />
        <div
          onClick={() => inputRef.current.click()}
          className="h-52 w-52 bg-indigo-400 rounded-full flex justify-center items-center cursor-pointer"
        >
          {!imageUploadProgress && !imageFileUrl && (
            <FaCamera className="absolute" size={50} />
          )}
          {imageUploadProgress ? (
            //
            <p className="text-3xl font-semibold text-indigo-800">
              {imageUploadProgress} %
            </p>
          ) : (
            <img
              className="h-full w-full rounded-full"
              src={imageFileUrl}
              alt=""
            />
          )}
        </div>

        <button
          type="button"
          className="h-12 w-full min-w-56 text-white bg-indigo-700 rounded-lg"
          onClick={handleImage}
        >
          upload
        </button>
        <input
          type="text"
          className="h-12 p-2 w-full min-w-56 rounded-lg"
          placeholder="Location"
          onChange={handleChange}
        />
      </div>

      <div className="flex justify-around items-center">
        <button
          className="h-12 w-1/3 text-white bg-indigo-700 rounded-lg"
          onClick={onPrevious}
        >
          previous
        </button>
        {isButtonEnable ? (
          <button
            className={`h-12 w-full text-white max-w-56 bg-indigo-700 rounded-lg cursor-not-allowed ${
              !isButtonEnable && "opacity-50"
            }`}
            onClick={() => onNext(formData)} // Pass form data to onSubmit handler
            disabled
          >
            All fields are mandatory
          </button>
        ) : (
          <button
            type="button"
            className={`h-12 w-full max-w-56 text-white bg-indigo-700 rounded-lg`}
            onClick={() => onNext(formData)} // Pass form data to onSubmit handler
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default CreateProfile;
