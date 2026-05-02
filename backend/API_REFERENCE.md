# MERN Bookstore API Reference

## Base URL
```
http://localhost:5000
```

## Authentication
Currently uses Firebase on the frontend. Backend does not have authentication middleware yet.

## Response Format

### Success Response
```json
{
  "message": "Operation successful",
  "book": { /* book data */ }
}
```

### Error Response
```json
{
  "message": "Error message",
  "error": "Detailed error"
}
```

---

## Endpoints

### 1. Get All Books
**URL:** `/all-books`
**Method:** `GET`
**Status Code:** `200`
**Response:**
```json
[
  {
    "_id": "64f8c9a1b2e3f4g5h6i7j8k9",
    "bookTitle": "The Great Gatsby",
    "authorName": "F. Scott Fitzgerald",
    "imgUrl": "https://example.com/gatsby.jpg",
    "category": "Fiction",
    "bookDescription": "A classic novel set in the Jazz Age...",
    "bookPDFURL": "https://example.com/gatsby.pdf",
    "price": 9.99,
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
]
```

---

### 2. Get Single Book
**URL:** `/book/:id`
**Method:** `GET`
**Parameters:**
- `id` (string) - MongoDB ObjectId

**Status Code:** `200` | `404`
**Response:**
```json
{
  "_id": "64f8c9a1b2e3f4g5h6i7j8k9",
  "bookTitle": "The Great Gatsby",
  "authorName": "F. Scott Fitzgerald",
  "imgUrl": "https://example.com/gatsby.jpg",
  "category": "Fiction",
  "bookDescription": "A classic novel...",
  "bookPDFURL": "https://example.com/gatsby.pdf",
  "price": 9.99,
  "createdAt": "2024-01-15T10:30:00.000Z",
  "updatedAt": "2024-01-15T10:30:00.000Z"
}
```

---

### 3. Upload New Book
**URL:** `/upload-book`
**Method:** `POST`
**Headers:**
```
Content-Type: application/json
```

**Request Body:**
```json
{
  "bookTitle": "The Great Gatsby",
  "authorName": "F. Scott Fitzgerald",
  "imgUrl": "https://example.com/gatsby.jpg",
  "category": "Fiction",
  "bookDescription": "A classic novel set in the Jazz Age...",
  "bookPDFURL": "https://example.com/gatsby.pdf"
}
```

**Status Code:** `201` | `400`
**Response:**
```json
{
  "message": "Book uploaded successfully",
  "book": { /* book data */ }
}
```

**Validation Rules:**
- `bookTitle`: Required, 3-200 characters
- `authorName`: Required, 2-100 characters
- `imgUrl`: Required, valid URL
- `category`: Required, from predefined list
- `bookDescription`: Required, 10-5000 characters
- `bookPDFURL`: Required, valid URL

**Error Response (400):**
```json
{
  "message": "Validation error",
  "errors": [
    "Book title is required",
    "Author name must be at least 2 characters long"
  ]
}
```

---

### 4. Update Book
**URL:** `/book/:id`
**Method:** `PATCH`
**Parameters:**
- `id` (string) - MongoDB ObjectId

**Headers:**
```
Content-Type: application/json
```

**Request Body:** (All fields optional, at least one required)
```json
{
  "bookTitle": "Updated Title",
  "authorName": "Updated Author",
  "imgUrl": "https://updated-url.com/image.jpg",
  "category": "Non-Fiction",
  "bookDescription": "Updated description...",
  "bookPDFURL": "https://updated-url.com/pdf.pdf"
}
```

**Status Code:** `200` | `400` | `404`
**Response:**
```json
{
  "message": "Book updated successfully",
  "book": { /* updated book data */ }
}
```

---

### 5. Delete Book
**URL:** `/book/:id`
**Method:** `DELETE`
**Parameters:**
- `id` (string) - MongoDB ObjectId

**Status Code:** `200` | `404`
**Response:**
```json
{
  "message": "Book deleted successfully",
  "book": { /* deleted book data */ }
}
```

---

### 6. Get Books by Category
**URL:** `/books-by-category/:category`
**Method:** `GET`
**Parameters:**
- `category` (string) - Book category

**Status Code:** `200`
**Response:**
```json
[
  { /* book objects */ }
]
```

**Available Categories:**
```
Fiction, Non-Fiction, Self-Help, Biography, Science, Fantasy,
Romance, Thriller, Mystery, Historical, Horror, Adventure,
Psychology, Philosophy, Poetry, Health & Wellness, Business,
Cooking, Art & Design, Children's, Politics, Technology, Travel,
Sports, True Crime, Religion & Spirituality, Humor, Young Adult
```

---

### 7. Search Books
**URL:** `/search?query=<search-term>`
**Method:** `GET`
**Query Parameters:**
- `query` (string, required) - Search term

**Status Code:** `200` | `400`
**Response:**
```json
[
  { /* matching book objects */ }
]
```

**Example:**
```
/search?query=Gatsby
/search?query=F.%20Scott%20Fitzgerald
```

---

### 8. Health Check
**URL:** `/health`
**Method:** `GET`
**Status Code:** `200`
**Response:**
```json
{
  "message": "Server is running"
}
```

---

## Status Codes

| Code | Meaning |
|------|---------|
| 200 | OK - Request successful |
| 201 | Created - Resource successfully created |
| 400 | Bad Request - Invalid data or validation error |
| 404 | Not Found - Resource doesn't exist |
| 500 | Internal Server Error - Server error |

---

## cURL Examples

### Get All Books
```bash
curl http://localhost:5000/all-books
```

### Get Single Book
```bash
curl http://localhost:5000/book/64f8c9a1b2e3f4g5h6i7j8k9
```

### Create Book
```bash
curl -X POST http://localhost:5000/upload-book \
  -H "Content-Type: application/json" \
  -d '{
    "bookTitle": "Sample Book",
    "authorName": "Author Name",
    "imgUrl": "https://example.com/image.jpg",
    "category": "Fiction",
    "bookDescription": "A sample book description",
    "bookPDFURL": "https://example.com/book.pdf"
  }'
```

### Update Book
```bash
curl -X PATCH http://localhost:5000/book/64f8c9a1b2e3f4g5h6i7j8k9 \
  -H "Content-Type: application/json" \
  -d '{
    "bookTitle": "Updated Title"
  }'
```

### Delete Book
```bash
curl -X DELETE http://localhost:5000/book/64f8c9a1b2e3f4g5h6i7j8k9
```

### Search Books
```bash
curl "http://localhost:5000/search?query=Gatsby"
```

---

## Rate Limiting
Not currently implemented. Consider adding rate limiting middleware for production.

## CORS
CORS is enabled for all origins. For production, update to specific domain in `index.js`:
```javascript
app.use(cors({
  origin: 'https://yourdomain.com'
}));
```

## Best Practices

1. **Always validate input** on the frontend before sending to API
2. **Use pagination** for large book lists in production
3. **Add authentication middleware** for POST, PATCH, DELETE operations
4. **Implement rate limiting** to prevent abuse
5. **Use HTTPS in production**
6. **Add request logging** for debugging
7. **Use environment variables** for sensitive data
