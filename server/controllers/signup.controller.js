import { Resend } from "resend";
import { errorHandler } from "../utils/error.js";
import User from "../models/user.js";
const api_key = process.env.API_KEY;
export const postSignup = async (req, res, next) => {
  try {
    const { name, username, email, profile, location, role } = req.body;

    console.log(req.body);

    const newUser = new User({
      name,
      username,
      email,
      profile,
      location,
      role,
    });
    await newUser.save();
    const resend = new Resend(api_key);

    await resend.emails.send({
      from: "surya <suryacp.com@gmail.com>",
      to: "suryamoni001@gmail.com",
      subject: "Hello World",
      html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
    });
    res.status(200).json(newUser);
  } catch (error) {
    next(error);
  }
};
