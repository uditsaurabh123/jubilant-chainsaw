const { Schema, model } = require("dynamoose")
const dynamoose = require("dynamoose")
const commentSchema = new Schema({
    commentId: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    createdAt: { type: Date, default: Date.now }
})

const chapterSchema = new Schema({
    chapterId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    comments: { type: Array, schema: [commentSchema] },
    video: {
        type: String,
        required: true,
    },
    createdAt: { type: Date, default: Date.now }
})

const sectionSchema = new Schema({
    sectionId: {
        type: String,
        required: true,
    },
    sectionTitle: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    chapters: { type: Set, schema: [chapterSchema] },
    createdAt: { type: Date, default: Date.now }
})

const courseRatings = new Schema({
    userId: { type: String, required: true },
    rating: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
})

const courseSchema = new Schema({
    courseTitle: { type: String, required: true },
    courseDescription: { type: String, required: true },
    coursePrice: { type: Number, required: true },
    isPublished: { type: Boolean, required: true },
    discount: { type: Number, required: true },
    courseContent: { type: Set, schema: [chapterSchema] },
    educator: { type: String, required: true },
    enrolledStudents: { type: Set, schema: [String] },
    courseRatings: { type: Set, schema: [courseRatings] },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    courseThumbnail: { type: String, required: true },
})


const Course = dynamoose.model('Course', courseSchema);
const CourseRating = dynamoose.model('CourseRatings', courseRatings);
const Section = dynamoose.model('SectionSchema', sectionSchema);
const Chapter = dynamoose.model('ChapterSchema', chapterSchema);

module.exports = { Course, CourseRating, Section, Chapter }