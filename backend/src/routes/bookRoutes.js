import express from 'express';
import Book from '../models/Book.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// GET all books
router.get('/all-books', async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    
    if (books.length === 0) {
      return res.status(200).json([]);
    }
    
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ 
      message: 'Error fetching books', 
      error: error.message 
    });
  }
});

// GET a single book by ID
router.get('/book/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    // Validate MongoDB ObjectId
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ message: 'Invalid book ID format' });
    }
    
    const book = await Book.findById(id);
    
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ 
      message: 'Error fetching book', 
      error: error.message 
    });
  }
});

// POST - Create a new book (Upload book)
router.post('/upload-book', protect, async (req, res) => {
  try {
    const { bookTitle, authorName, imgUrl, category, bookDescription, bookPDFURL } = req.body;

    // Validate required fields
    if (!bookTitle || !authorName || !imgUrl || !category || !bookDescription || !bookPDFURL) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create new book
    const newBook = new Book({
      bookTitle,
      authorName,
      imgUrl,
      category,
      bookDescription,
      bookPDFURL
    });

    // Save to database
    const savedBook = await newBook.save();
    
    res.status(201).json({ 
      message: 'Book uploaded successfully', 
      book: savedBook 
    });
  } catch (error) {
    // Handle validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ 
        message: 'Validation error', 
        errors: messages 
      });
    }
    
    res.status(500).json({ 
      message: 'Error uploading book', 
      error: error.message 
    });
  }
});

// PATCH - Update a book
router.patch('/book/:id', protect, async (req, res) => {
  try {
    const { id } = req.params;
    const { bookTitle, authorName, imgUrl, category, bookDescription, bookPDFURL } = req.body;

    // Validate MongoDB ObjectId
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ message: 'Invalid book ID format' });
    }

    // Validate that at least one field is provided
    if (!bookTitle && !authorName && !imgUrl && !category && !bookDescription && !bookPDFURL) {
      return res.status(400).json({ message: 'At least one field is required for update' });
    }

    // Update book
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { 
        bookTitle, 
        authorName, 
        imgUrl, 
        category, 
        bookDescription, 
        bookPDFURL,
        updatedAt: new Date()
      },
      { new: true, runValidators: true }
    );

    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.status(200).json({ 
      message: 'Book updated successfully', 
      book: updatedBook 
    });
  } catch (error) {
    // Handle validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ 
        message: 'Validation error', 
        errors: messages 
      });
    }
    
    res.status(500).json({ 
      message: 'Error updating book', 
      error: error.message 
    });
  }
});

// DELETE - Delete a book
router.delete('/book/:id', protect, async (req, res) => {
  try {
    const { id } = req.params;

    // Validate MongoDB ObjectId
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ message: 'Invalid book ID format' });
    }

    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.status(200).json({ 
      message: 'Book deleted successfully', 
      book: deletedBook 
    });
  } catch (error) {
    res.status(500).json({ 
      message: 'Error deleting book', 
      error: error.message 
    });
  }
});

// GET books by category
router.get('/books-by-category/:category', async (req, res) => {
  try {
    const { category } = req.params;
    
    const books = await Book.find({ category }).sort({ createdAt: -1 });
    
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ 
      message: 'Error fetching books by category', 
      error: error.message 
    });
  }
});

// Search books by title or author
router.get('/search', async (req, res) => {
  try {
    const { query } = req.query;
    
    if (!query) {
      return res.status(400).json({ message: 'Search query is required' });
    }

    const books = await Book.find({
      $or: [
        { bookTitle: { $regex: query, $options: 'i' } },
        { authorName: { $regex: query, $options: 'i' } }
      ]
    });

    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ 
      message: 'Error searching books', 
      error: error.message 
    });
  }
});

export default router;
