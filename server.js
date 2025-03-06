const express = require("express");

const app = express();
const port = 3000;

const reviewsData = [
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

app.get("/reviews", (req, res) => {
    res.json(reviewsData);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
