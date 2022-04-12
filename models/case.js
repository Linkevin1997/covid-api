import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Case = new Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  }
},
{ timestamps: true }
);

export default mongoose.model("cases", Case);