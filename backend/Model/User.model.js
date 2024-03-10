const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    name: {
      type: String,
      default: "",
    },
    profileUrl: {
      type: String,
      require: true,
    },
    avatarUrl: {
      type: String,
    },
    likedProfiles: {
      type: [String],
      default: [],
    },
    likedBy: [
      {
        username: {
          type: String,
          require: true,
        },
        avatarUrl: {
          type: String,
        },
        likedDate: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true }
);

exports.User = mongoose.model("user", UserSchema);
