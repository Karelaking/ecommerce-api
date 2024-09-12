import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema(
  {
    customerId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
    ],
    totalAmount: {
      type: Number,
      required: true,
      defaultValue: 0.0,
    },
    status: {
      type: String,
      enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
    },
    shippingAddress: {
      type: Schema.Types.ObjectId,
      ref: "User.address",
      required: true,
    },
    payment: {
      type: Schema.Types.ObjectId,
      ref: "Payment",
      required: true,
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
