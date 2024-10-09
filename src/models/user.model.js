import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    user_email: { type: String, required: true },
    user_name: { type: String, required: true },
    user_password: { type: String, required: true },
    user_phone_number: { type: String },
    user_avt: { type: String },
    user_sex: { type: String },
    user_birth_day: { type: Date },
    user_address: [
      {
        province: { type: String, required: true },
        district: { type: String, required: true },
        street: { type: String, required: true },
        ward: { type: String, required: true },
      },
    ],
    user_cart: [
      {
        product_id: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
        variant_id: { type: mongoose.Schema.Types.ObjectId, required: true },
        quantity: { type: Number, required: true },
      },
    ],
    user_role: { type: String, required: true },
    saved_coupons: [{ type: mongoose.Schema.Types.ObjectId, ref: "Coupon" }],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
