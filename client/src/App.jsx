import React, { useState } from "react";
import { MultilevelContext } from "./context/MultilevelContext";
import MultiLevelForm from "./components/MultilevelForm";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    userName: "",
    password: "",
    email: "",
    roles: [],
    avatar: "",
    location: "",
  });
  const [imageFileUrl, setImageFileUrl] = useState("");
  const [selectedRoles, setSelectedRoles] = useState([]);
  return (
    <MultilevelContext.Provider
      value={{
        formData,
        setFormData,
        imageFileUrl,
        setImageFileUrl,
        selectedRoles,
        setSelectedRoles,
      }}
    >
      <MultiLevelForm />
    </MultilevelContext.Provider>
  );
};

export default App;
