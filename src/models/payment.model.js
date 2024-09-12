import mongoose, { Schema } from "mongoose";

const paymentSchema = new Schema(
  {
    orderId: {
      type: Schema.Types.ObjectId,
      ref: "Order",
      required: true,
    },
    paymentMethod: {
      type: String,
      enum: ["online", "cash", "cupones"],
      default: "online",
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "complete", "failed"],
      default: "pending",
      required: true,
    },
    paymentAmount: {
      type: Number,
      default: 0.0,
      required: true,
    },
    transactionId: {
      type: String,
      required: true,
    },
    transactionDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

export const Payment = mongoose.model("Payment", paymentSchema);
