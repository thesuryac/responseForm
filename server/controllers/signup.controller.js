import nodemailer from "nodemailer";
import { errorHandler } from "../utils/error.js";
import User from "../models/user.js";
const api_key = process.env.API_KEY;
export const postSignup = async (req, res, next) => {
  try {
    const { name, username, email, avatar, location, roles } = req.body;

    const newUser = new User({
      name,
      username,
      email,
      avatar,
      location,
      roles,
    });
    await newUser.save();

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL,
        pass: process.env.PASSWORD,
      },
    });

    var mailOptions = {
      from: process.env.MAIL,
      to: email,
      subject: "Thank You",
      text: "Welcome aboard! We're thrilled to have you join the community.",
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        next(errorHandler(503, error));
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    res.status(200).json(newUser);
  } catch (error) {
    next(error);
  }
};
