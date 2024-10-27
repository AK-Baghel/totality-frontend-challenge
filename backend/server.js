import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDb from "./config/db.js";
import User from "./models/User.js";
import UserItems from "./models/UserItems.js";
import Item from "./models/Items.js";
import Favourite from "./models/Favourite.js";
import Cart from "./models/Cart.js";

import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

const app = express();
dotenv.config()
app.use(cors());
app.use(express.json());
connectDb();



app.get("/item", async (req, res) => {
    const data = await Item.find();
    res.send(data);
})
app.get("/userItem", async (req, res) => {
    const data = await UserItems.find();
    res.send(data);
})
app.get("/register", async (req, res) => {
    const data = await User.find();
    res.send(data);
})
app.get("/register", async (req, res) => {
    const data = await User.find();
    res.send(data);
})
app.get("/cart", async (req, res) => {
    const data = await Cart.find();
    res.send(data);
})

app.post("/cartItems", async (req, res) => {
    const data = await UserItems.findOne({ _id: req.body.id });
    res.send(data);
})


app.put('/favItem/:id', async (req, resp) => {
    let result = await UserItems.updateOne({ _id: req.params.id }, { $set: req.body })
    resp.send(result);
})


app.post('/item', async (req, res) => {
    let item = new Item(req.body);
    let result = await item.save();

    let userItems = new UserItems(req.body);
    let result1 = await userItems.save();

})

app.post("/fav", async (req, res) => {
    let fav = new Favourite(req.body);
    let result = await fav.save();
    res.send(result)
})
app.post("/cart", async (req, res) => {
    let cart = new Cart(req.body);
    let result = await cart.save();
    res.send(result)
})


app.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Registration failed', error: error.message });
    }
})

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error('User not found');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Invalid password');
        }
        const token = jwt.sign({ userId: user._id }, 'secret_key', { expiresIn: '1h' });
        res.send(user._id);

    } catch (error) {
        res.status(401).json({ message: 'Authentication failed', error: error.message });
    }
})

app.listen(process.env.PORT, () => {
    console.log("Server Running");
})