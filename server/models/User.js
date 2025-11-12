import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import e from "express";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: [true, "Please provide email"],
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please provide a valid email",
      ],
    },
    password: {
      type: String,
    },
    name: {
      type: String,
      required: [true, "Please provide name"],
      minlength: 3,
      maxlength: 50,
    },
    login_pin: {
      type: String,
      minlength: 4,
      maxlength: 4,
    },
    phone_number: {
      type: String,
      match: [/^\+?[1-9]\d{1,14}$/, "Please provide a valid phone number"],
      unique: true,
      sparse: true,
    },
    date_of_birth: Date,
    biometricKey: String,
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
    },
    wrong_pin_attempts: {
      type: Number,
      default: 0,
    },
    blocked_until_pin: {
      type: Date,
      default: null,
    },
    wrong_password_attempts: {
      type: Number,
      default: 0,
    },
    blocked_until_password: {
      type: Date,
      default: null,
    },
    balance: {
      type: Number,
      default: 6500.0,
    },
  },
  { timestamps: true }
);
