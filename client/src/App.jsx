import React, { useEffect, useState } from "react";
import { MultilevelContext } from "./context/MultilevelContext";
import MultiLevelForm from "./components/MultilevelForm";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
    roles: [],
    avatar: "",
    location: "",
  });
  const [imageFileUrl, setImageFileUrl] = useState("");
  const [selectedRoles, setSelectedRoles] = useState([]);

  useEffect(() => {
    setFormData({ ...formData, roles: selectedRoles });
  }, [selectedRoles]);

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
