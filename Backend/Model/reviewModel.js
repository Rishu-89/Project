import mongoose from "mongoose";

const reviewSchema=new mongoose.Schema({
  name: {
    type: String,
    required: true,
   
  },
  description: {
    type: String,
    required: true,
    
  },
  
  destination: {
    type: String,
    required: true,
  },
  photo: {
    data: Buffer,
    contentType: String,
  }
},
{ timestamps: true });

export default mongoose.model("review",reviewSchema);