const express = require("express")
const { Course, CourseRating } = require("../models/courseModels");

const app = express();

app.get("/", (req, res) => {
    return res.json({ "message": "Welcome Backend API courses" })
})


app.post("/", async (req, res) => {
    try {
        console.log(req.body)
        const course = new Course({
            courseTitle: req.body.courseTitle,
            courseDescription: req.body.courseDescription,
        })
        const data = await course.save()
        return res.json({ "data": data })
    }
    catch (error) {
        console.error(error)
        return res.status(500).json({ "error": error.message })
    }
})

app.post("/course-rating", async (req, res) => {
    try {
        console.log(req.body)
        const courseRating = new CourseRating({
            ratingId: req.body.ratingId,
            userId: req.body.userId,
            rating: req.body.rating,
        })
        console.log("working ok ...111")
        const data = await courseRating.save()
        console.log("working ok ...222")
        return res.json({ "data": data })
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({ "error": error.message })
    }
})

app.get("/course-rating", async (req, res) => {
    try {
        console.log(req.body)
        const courseRatings = await CourseRating.scan().exec();
        return res.json({ "data": courseRatings })
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({ "error": error.message })
    }
})


module.exports = app