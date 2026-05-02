import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema(
  {
    bookTitle: {
      type: String,
      required: [true, 'Book title is required'],
      trim: true,
      minlength: [3, 'Book title must be at least 3 characters long'],
      maxlength: [200, 'Book title must not exceed 200 characters']
    },
    authorName: {
      type: String,
      required: [true, 'Author name is required'],
      trim: true,
      minlength: [2, 'Author name must be at least 2 characters long'],
      maxlength: [100, 'Author name must not exceed 100 characters']
    },
    imgUrl: {
      type: String,
      required: [true, 'Image URL is required'],
      match: [
        /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
        'Please provide a valid image URL'
      ]
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      enum: [
        'Fiction', 'Non-Fiction', 'Self-Help', 'Biography', 'Science', 'Fantasy',
        'Romance', 'Thriller', 'Mystery', 'Historical', 'Horror', 'Adventure',
        'Psychology', 'Philosophy', 'Poetry', 'Health & Wellness', 'Business',
        'Cooking', 'Art & Design', 'Children\'s', 'Politics', 'Technology', 'Travel',
        'Sports', 'True Crime', 'Religion & Spirituality', 'Humor', 'Young Adult'
      ],
      message: '{VALUE} is not a valid category'
    },
    bookDescription: {
      type: String,
      required: [true, 'Book description is required'],
      trim: true,
      minlength: [10, 'Description must be at least 10 characters long'],
      maxlength: [5000, 'Description must not exceed 5000 characters']
    },
    bookPDFURL: {
      type: String,
      required: [true, 'PDF URL is required'],
      match: [
        /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
        'Please provide a valid PDF URL'
      ]
    },
    price: {
      type: Number,
      default: 9.99,
      min: [0, 'Price cannot be negative']
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true
  }
);

const Book = mongoose.model('Book', bookSchema);

export default Book;
