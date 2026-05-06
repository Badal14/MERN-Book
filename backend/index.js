const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

// middlewear 
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World!')
})

// mongodb confiq here
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://badallad67_db_user:Badal123@bookstore.p04estm.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        const bookCollections = client.db("BookInventory").collection("Books");
        const usersCollection = client.db("BookInventory").collection("Users");

        // register user
        app.post("/api/auth/register", async (req, res) => {
            const { name, email, password } = req.body;
            if (!name || !email || !password) {
                return res.status(400).json({ message: "Name, email, and password are required" });
            }

            const existingUser = await usersCollection.findOne({ email });
            if (existingUser) {
                return res.status(409).json({ message: "Email is already registered" });
            }

            const newUser = { name, email, password }; 
            const result = await usersCollection.insertOne(newUser);
            
            res.status(201).json({
                message: "User registered successfully",
                user: {
                    id: result.insertedId,
                    name: newUser.name,
                    email: newUser.email
                },
                token: "simulated_jwt_token_" + result.insertedId 
            });
        });

        // login user
        app.post("/api/auth/login", async (req, res) => {
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).json({ message: "Email and password are required" });
            }

            const user = await usersCollection.findOne({ email });
            if (!user || user.password !== password) {
                return res.status(401).json({ message: "Invalid email or password" });
            }

            res.status(200).json({
                message: "Login successful",
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email
                },
                token: "simulated_jwt_token_" + user._id
            });
        });


        // insert a book to db: Post Method
        app.post("/api/upload-book", async (req, res) => {
            const data = req.body;
            // console.log(data);
            const result = await bookCollections.insertOne(data);
            res.send(result);
        })

        // // get all books from db
        // app.get("/all-books", async (req, res) => {
        //     const books = bookCollections.find();
        //     const result = await books.toArray();
        //     res.send(result)
        // })

        // get all books & find by a category from db
        app.get("/api/all-books", async (req, res) => {
            let query = {};
            if (req.query?.category) {
                query = { category: req.query.category }
            }
            const result = await bookCollections.find(query).toArray();
            res.send(result)
        })

        // update a books method
        app.patch("/api/book/:id", async (req, res) => {
            const id = req.params.id;
            // console.log(id);
            const updateBookData = req.body;
            const filter = { _id: new ObjectId(id) };
            const updatedDoc = {
                $set: {
                    ...updateBookData
                }
            }
            const options = { upsert: true };

            // update now
            const result = await bookCollections.updateOne(filter, updatedDoc, options);
            res.send(result);
        })


        // delete a item from db
        app.delete("/api/book/:id", async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            const result = await bookCollections.deleteOne(filter);
            res.send(result);
        })


        // get a single book data
        app.get("/api/book/:id", async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            const result = await bookCollections.findOne(filter);
            res.send(result)
        })


        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
