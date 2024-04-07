import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  location: {
    type: String,
    required: true,
  },
  roles: {
    type: [],
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
