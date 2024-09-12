import mongoose, { Schema } from "mongoose";

const wishListSchema = new Schema(
  {
    wishListItems: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "Product",
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);

export const WishList = mongoose.model("WishList", wishListSchema);
