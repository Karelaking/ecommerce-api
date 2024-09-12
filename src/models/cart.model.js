import mongoose, { Schema } from "mongoose";

const cartSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          default: 0,
        },
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    productStatus: {
      type: String,
      enum: ["orderd", "waiting"],
      default: "waiting",
    },
  },
  { timestamps: true }
);

export const Cart = mongoose.model("Cart", cartSchema);
