import React, { useContext, useRef, useState } from "react";
import { FaCamera } from "react-icons/fa";
import { imageDb } from "../config";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

import { MultilevelContext } from "../context/MultilevelContext";

const CreateProfile = ({ onNext, onPrevious, formData, setFormData }) => {
  const inputRef = useRef();
  const [img, setImg] = useState("");
  const { imageFileUrl, setImageFileUrl } = useContext(MultilevelContext);

  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const handleChange = (e) => {
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
  return (
    <div className="h-full w-full border border-blue-800 flex flex-col justify-evenly bg-slate-800">
      <h1 className="text-white mx-auto">Create Profile</h1>
      <div className="h-[60%] w-[60%] mx-auto flex flex-col justify-evenly">
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
          className="h-52 w-52 bg-slate-300 rounded-full flex justify-center items-center cursor-pointer"
        >
          {!imageUploadProgress && !imageFileUrl && (
            <FaCamera className="absolute" size={50} />
          )}
          {imageUploadProgress ? (
            //
            <p>{imageUploadProgress}</p>
          ) : (
            <img
              className="h-full w-full rounded-full"
              src={imageFileUrl}
              alt=""
            />
          )}
        </div>

        <button type="button" onClick={handleImage}>
          upload
        </button>
        <input
          type="text"
          className="h-12 p-2 rounded-lg"
          placeholder="Location"
          onChange={handleChange}
        />
      </div>

      <div className="flex justify-around items-center">
        <button
          className="h-12 w-96 bg-indigo-700 rounded-lg"
          onClick={onPrevious}
        >
          previous
        </button>
        <button className="h-12 w-96 bg-indigo-700 rounded-lg" onClick={onNext}>
          next
        </button>
      </div>
    </div>
  );
};

export default CreateProfile;
