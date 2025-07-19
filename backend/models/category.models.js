import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, 
    unique: true
  },
  description: {
    type: String,
    trim: true
  },
  image: {
    type: String,
    trim: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true });

const Category = mongoose.model('Category', categorySchema);

export default Category;