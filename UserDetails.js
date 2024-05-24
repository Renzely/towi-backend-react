const mongoose = require("mongoose");

const UserDetailSchema = new mongoose.Schema(
  {
    remarks: String,
    firstname: String,
    // middle_name: String,
    lastname: String,
    email_Address: { type: String, unique: true },
    contactNum: String,
    username: String,
    password: String,
    isActivate: Boolean,
    accountNameBranchManning: String,
  },
  {
    collection: "TowiDb",
  }
);

mongoose.model("TowiDb", UserDetailSchema);
