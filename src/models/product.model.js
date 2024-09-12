import mongoose, { Schema } from "mongoose";

productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    seller: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
    offer: {
      type: Array,
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
