const mongoose = require("mongoose");

const dbPath = process.env.MONGO_URI;

const Post = require("../models/Post");

const connectDB = async () => {
  try {
    await mongoose.connect(dbPath);
    console.log("Mongodb Connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

// function insertPostData() {
//   Post.insertMany([
//     {
//       title: "Post 1",
//       body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//     },
//     {
//       title: "Post 2",
//       body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//     },
//     {
//       title: "Post 3",
//       body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//     },
//     {
//       title: "Post 4",
//       body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//     },
//     {
//       title: "Post 5",
//       body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//     },
//     {
//       title: "Post 6",
//       body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//     },
//     {
//       title: "Post 7",
//       body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//     },
//     {
//       title: "Post 8",
//       body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//     },
//     {
//       title: "Post 9",
//       body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//     },
//     {
//       title: "Post 10",
//       body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//     },
//   ]);
// }

// insertPostData();

module.exports = connectDB;
