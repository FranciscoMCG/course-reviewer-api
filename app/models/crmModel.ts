import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export const reviewSchema = new Schema({
  firstName: {
    type: String,
    required: "Enter a first name"
  },
  lastName: {
    type: String,
    required: "Enter a first name"
  },
  email: {
    type: String
  },
  course: {
    type: String
  },
  review: {
    type: String
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});
