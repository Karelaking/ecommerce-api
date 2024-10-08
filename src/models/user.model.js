import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const ACCESS_TOKEN_SECRET_KEY = process.env.ACCESS_TOKEN_SECRET_KEY;
const ACCESS_TOKEN_EXPIRY = process.env.ACCESS_TOKEN_EXPIRY;
const REFRESH_TOKEN_SECRET_KEY = process.env.REFRESH_TOKEN_SECRET_KEY;
const REFRESH_TOKEN_EXPIRY = process.env.REFRESH_TOKEN_EXPIRY;

userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    age: {
      type: Number,
      required: true,
      min: 18,
      max: 99,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
      minlength: 10,
      maxlength: 10,
    },
    address: {
      type: String,
      required: true,
      lowercase: true,
    },
    rolle: {
      type: String,
      required: true,
      enum: ["admin", "customer", "seller"],
      default: "customer",
    },
    cart: {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
    orderHistory: {
      type: [Schema.Types.ObjectId],
      ref: "Order",
    },
  },
  { timestamps: true }
);

// Hash the password before saving to the database
userSchema.pre("save", async function (next) {
  // Only hash the password if it's being updated
  if (!this.isModified("password")) return next();
  this.password = bcrypt.hash(this.password, 10);
  next();
});

// Method to compare the provided password with the hashed one
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Method to generate access token
userSchema.methods.generateAccessToken = async function () {
  const accessToken = jwt.sign(
    { userId: this._id, role: this.rolle, password: this.password },
    ACCESS_TOKEN_SECRET_KEY,
    { expiresIn: ACCESS_TOKEN_EXPIRY }
  );
  return accessToken;
};

// Method to generate refresh token
userSchema.methods.generateRefreshToken = async function () {
  const refreshToken = jwt.sign(
    { userId: this._id },
    REFRESH_TOKEN_SECRET_KEY,
    { expiresIn: REFRESH_TOKEN_EXPIRY }
  );
  return refreshToken;
};

export const User = mongoose.model("User", userSchema);
