const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors({
    origin: "*", 
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

let reviewsData = [
    {
        "weightLoss": "10 kgs",
        "weeks": "3",
        "text": "This platform is the best thing that has happened to my health. I was shocked how my cravings disappeared!",
        "author": "Anshuman Khuranna",
        "image": "Rectangle 17.png"
    },
    {
        "weightLoss": "12 kgs",
        "weeks": "6",
        "text": "The best part is not just the weight loss but how much healthier I feel. My energy levels are higher, and I sleep so much better now.",
        "author": "Mark Robinson",
        "image": "oo.jpg"
    },
    {
        "weightLoss": "8 kgs",
        "weeks": "4",
        "text": "I never thought I could lose weight so quickly while feeling great. The meal plan is amazing!",
        "author": "Priya Sharma",
        "image": "qwerty.const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors({
    origin: "*", 
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

let reviewsData = [
    {
        "weightLoss": "10 kgs",
        "weeks": "3",
        "text": "This platform is the best thing that has happened to my health. I was shocked how my cravings disappeared!",
        "author": "Anshuman Khuranna",
        "image": "Rectangle 17.png"
    },
    {
        "weightLoss": "12 kgs",
        "weeks": "6",
        "text": "The best part is not just the weight loss but how much healthier I feel. My energy levels are higher, and I sleep so much better now.",
        "author": "Mark Robinson",
        "image": "oo.jpg"
    },
    {
        "weightLoss": "8 kgs",
        "weeks": "4",
        "text": "I never thought I could lose weight so quickly while feeling great. The meal plan is amazing!",
        "author": "Priya Sharma",
        "image": "qwerty.jpg"
    }
];

// **GET /api/reviews** - Получить все отзывы
app.get("/api/reviews", (req, res) => {
    res.json(reviewsData);
});

// **POST /api/reviews** - Добавить новый отзыв
app.post("/api/reviews", (req, res) => {
    const { weightLoss, weeks, text, author, image } = req.body;

    if (!weightLoss || !weeks || !text || !author || !image) {
        return res.status(400).json({ message: "Все поля обязательны!" });
    }

    const newReview = {
        weightLoss,
        weeks,
        text,
        author,
        image
    };

    reviewsData.push(newReview);
    res.status(201).json(newReview);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
jpg"
    }
];

// **GET /api/reviews** - Получить все отзывы
app.get("/api/reviews", (req, res) => {
    res.json(reviewsData);
});

// **POST /api/reviews** - Добавить новый отзыв
app.post("/api/reviews", (req, res) => {
    const { weightLoss, weeks, text, author, image } = req.body;

    if (!weightLoss || !weeks || !text || !author || !image) {
        return res.status(400).json({ message: "Все поля обязательны!" });
    }

    const newReview = {
        weightLoss,
        weeks,
        text,
        author,
        image
    };

    reviewsData.push(newReview);
    res.status(201).json(newReview);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
