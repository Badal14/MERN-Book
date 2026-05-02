# MERN Bookstore Backend

Backend API for the MERN Bookstore application built with **Express.js**, **MongoDB**, and **Mongoose**.

## 📋 Features

- ✅ RESTful API for book management
- ✅ MongoDB integration with Mongoose ODM
- ✅ CRUD operations (Create, Read, Update, Delete)
- ✅ Input validation and error handling
- ✅ Search and filter by category
- ✅ CORS enabled for frontend communication
- ✅ Environment variable configuration

## 🛠️ Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **Nodemon** - Development auto-restart
- **CORS** - Cross-Origin Resource Sharing
- **Dotenv** - Environment variable management

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas account)
- npm or yarn

### Steps

1. **Clone the repository** (if not already done)
   ```bash
   cd MERN\ BOOK/backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create `.env` file**
   ```bash
   cp .env.example .env
   ```

4. **Configure MongoDB URI** in `.env`:
   - For local MongoDB:
     ```
     MONGODB_URI=mongodb://localhost:27017/mern-bookstore
     ```
   - For MongoDB Atlas (cloud):
     ```
     MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/mern-bookstore
     ```

5. **Ensure MongoDB is running**
   - Local: Run `mongod` in terminal
   - Atlas: Your cluster is always running

## 🚀 Running the Server

### Development mode (with auto-restart)
```bash
npm run dev
```

### Production mode
```bash
npm start
```

The server will start on `http://localhost:5000`

## 📚 API Endpoints

All endpoints are prefixed with `/api`

### Books

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/all-books` | Get all books |
| GET | `/book/:id` | Get book by ID |
| POST | `/upload-book` | Create new book |
| PATCH | `/book/:id` | Update book |
| DELETE | `/book/:id` | Delete book |
| GET | `/books-by-category/:category` | Get books by category |
| GET | `/search?query=` | Search books by title or author |

### Health Check

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/health` | Server status check |

## 📖 API Usage Examples

### Get All Books
```bash
curl http://localhost:5000/api/all-books
```

### Get Single Book
```bash
curl http://localhost:5000/api/book/64f8c9a1b2e3f4g5h6i7j8k9
```

### Create New Book
```bash
curl -X POST http://localhost:5000/api/upload-book \
  -H "Content-Type: application/json" \
  -d '{
    "bookTitle": "The Great Gatsby",
    "authorName": "F. Scott Fitzgerald",
    "imgUrl": "https://example.com/gatsby.jpg",
    "category": "Fiction",
    "bookDescription": "A classic novel set in the Jazz Age",
    "bookPDFURL": "https://example.com/gatsby.pdf"
  }'
```

### Update Book
```bash
curl -X PATCH http://localhost:5000/api/book/64f8c9a1b2e3f4g5h6i7j8k9 \
  -H "Content-Type: application/json" \
  -d '{
    "bookTitle": "Updated Title"
  }'
```

### Delete Book
```bash
curl -X DELETE http://localhost:5000/api/book/64f8c9a1b2e3f4g5h6i7j8k9
```

### Search Books
```bash
curl "http://localhost:5000/api/search?query=Gatsby"
```

## 📊 Book Schema

```javascript
{
  _id: ObjectId,
  bookTitle: String (required, 3-200 chars),
  authorName: String (required, 2-100 chars),
  imgUrl: String (required, valid URL),
  category: String (required, enum values),
  bookDescription: String (required, 10-5000 chars),
  bookPDFURL: String (required, valid URL),
  price: Number (default: 9.99),
  createdAt: Date,
  updatedAt: Date
}
```

### Valid Categories
```
Fiction, Non-Fiction, Self-Help, Biography, Science, Fantasy,
Romance, Thriller, Mystery, Historical, Horror, Adventure,
Psychology, Philosophy, Poetry, Health & Wellness, Business,
Cooking, Art & Design, Children's, Politics, Technology, Travel,
Sports, True Crime, Religion & Spirituality, Humor, Young Adult
```

## ⚙️ Environment Variables

```env
# MongoDB connection string
MONGODB_URI=mongodb://localhost:27017/mern-bookstore

# Server port
PORT=5000

# Node environment
NODE_ENV=development
```

## 🔗 Backwards Compatibility

The API also supports the original endpoints without `/api` prefix for backwards compatibility with existing frontend:
- GET `/all-books` → redirects to `/api/all-books`
- GET `/book/:id` → redirects to `/api/book/:id`
- POST `/upload-book` → redirects to `/api/upload-book`

## 🐛 Error Handling

The API returns appropriate HTTP status codes and error messages:

- **200** - Success
- **201** - Created
- **400** - Bad Request (validation errors)
- **404** - Not Found
- **500** - Server Error

Example error response:
```json
{
  "message": "Error uploading book",
  "error": "error details"
}
```

## 📝 Validation Rules

- **Book Title**: 3-200 characters, required
- **Author Name**: 2-100 characters, required
- **Image URL**: Valid URL format, required
- **Category**: Must be from predefined list, required
- **Book Description**: 10-5000 characters, required
- **PDF URL**: Valid URL format, required

## 🚀 Deployment

### Deploy to Heroku

```bash
# Add Heroku remote
heroku create your-app-name

# Set environment variables
heroku config:set MONGODB_URI=your_mongodb_uri

# Deploy
git push heroku main
```

### Deploy to Vercel (with serverless)

See Vercel documentation for Node.js deployment

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Commit and push
5. Create a Pull Request

## 📄 License

ISC

## 🆘 Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running (`mongod`)
- Check MONGODB_URI in .env
- For MongoDB Atlas, whitelist your IP address

### Port Already in Use
```bash
# Change PORT in .env to another value (e.g., 5001)
# Or kill the process using port 5000
```

### Dependencies Installation Issues
```bash
# Clear npm cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## 📞 Support

For issues or questions, please create an issue in the repository.
