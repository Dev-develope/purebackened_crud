import mongoose from "mongoose";

// Define the schema
const userDetailsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: String,
  number: {
    type: String,
    required: true
  },
  spouse: String,
  city: String,
}, {
  timestamps: true
});

// Create the model
const UserDetails = mongoose.model("UserDetails", userDetailsSchema);

export default UserDetails;
