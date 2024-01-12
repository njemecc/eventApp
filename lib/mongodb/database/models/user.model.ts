import { model, Schema, models } from "mongoose";

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  firstName: { type: String },
  lastNmae: { type: String },
  photo: { type: String },
});

const User = models.User || model("User", UserSchema);

export default User;
