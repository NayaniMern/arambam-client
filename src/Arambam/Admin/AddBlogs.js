import axios from "axios";
import React, { useState } from "react";


const AddBlogs = () => {
  const [image, setImage] = useState("");
  const [image1, setImage1] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");
  const [quote, setQuote] = useState("");
   const [readingtime, setReadingTime] = useState("");
    const [shortdes, setShortDes] = useState("");
    const [longdes1, setLongDes1] = useState("");
    const [longdes2, setLongDes2] = useState("");
     const [content, setContent] = useState("");
      const [tags, setTags] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post(`https://arambam-server.onrender.com/blogs`, {
        image,image1,
        title,author,date,category,rating,quote,readingtime,shortdes,longdes1,longdes2,content,tags
      })
      .then((res) => {
        alert("You Have Sucessfully Posted Blog Data");
        setImage("");
        setImage1("");
        setTitle("");
        setAuthor("");
        setDate("");
        setCategory("");
        setRating("");
        setQuote("");
        setReadingTime("");
        setShortDes("");
        setLongDes1("");
        setLongDes2("");
        setContent("");
        setTags("");

      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container py-5 addblog">
      <h1 className="text-center mb-4 fs-2 fw-bold text-uppercase " style={{color:"#2E7D32",fontFamily:"Savate"}}>Add Blogs</h1>
      <div className="row justify-content-center ">
        <div className="col-md-12 col-lg-12 ">
          <form className="container   col-8" onSubmit={submitHandler}>
            <div className=" form-floating">
              <input
                type="image_url"
                value={image}
                className="form-control mb-3"
                placeholder="Enter Blog Image"
                onChange={(e) => setImage(e.target.value)}
              />
              <label>Enter Blog Image_URL</label>
            </div>
            <div className=" form-floating">
              <input
                type="image_url1"
                value={image1}
                className="form-control mb-3"
                placeholder="Enter Blog Image1"
                onChange={(e) => setImage1(e.target.value)}
              />
              <label>Enter Blog Image_URL1</label>
            </div>
            <div className=" form-floating">
              <input
                type="quote"
                value={quote}
                className="form-control mb-3"
                placeholder="Enter Blog Quote"
                onChange={(e) => setQuote(e.target.value)}
              />
              <label>Enter Blog Quote</label>
            </div>
            <div className=" form-floating">
              <input
                type="title"
                value={title}
                className="form-control mb-3"
                placeholder="Enter Blog Title"
                onChange={(e) => setTitle(e.target.value)}
              />
              <label>Enter Blog Title</label>
            </div>
            <div className="d-lg-flex justify-content-around">
            <div className=" form-floating">
              <input
                type="author"
                value={author}
                className="form-control mb-3"
                placeholder="Enter Blog Author"
                onChange={(e) => setAuthor(e.target.value)}
              />
              <label>Enter Blog Author</label>
            </div>
            <div className=" form-floating">
              <input
                type="name"
                value={date}
                className="form-control mb-3"
                placeholder="Enter Blog Date"
                onChange={(e) => setDate(e.target.value)}
              />
              <label>Enter Blog Date</label>
            </div>
            </div>
            <div className="d-lg-flex justify-content-around">
            <div className=" form-floating">
              <input
                type="category"
                value={category}
                className="form-control mb-3"
                placeholder="Enter Blog Category"
                onChange={(e) => setCategory(e.target.value)}
              />
              <label>Enter Blog Category</label>
            </div>
            <div className=" form-floating">
              <input
                type="rating"
                value={rating}
                className="form-control mb-3"
                placeholder="Enter Blog Rating"
                onChange={(e) => setRating(e.target.value)}
              />
              <label>Enter Blog Rating</label>
            </div>
            <div className=" form-floating">
              <input
                type="readingtime"
                value={readingtime}
                className="form-control mb-3"
                placeholder="Enter Blog Reading Time"
                onChange={(e) => setReadingTime(e.target.value)}
              />
              <label>Enter Blog Reading Time</label>
            </div>
            
            </div>
            <div className=" form-floating">
              <input
                type="shortdes"
                value={shortdes}
                className="form-control mb-3"
                placeholder="Enter Blog Short Description"
                onChange={(e) => setShortDes(e.target.value)}
              />
              <label>Enter Blog Short Description</label>
            </div>
            <div className=" form-floating">
              <input
                type="longdes1"
                value={longdes1}
                className="form-control mb-3"
                placeholder="Enter Blog Long Description1"
                onChange={(e) => setLongDes1(e.target.value)}
              />
              <label>Enter Blog Long Description</label>
            </div>
            <div className=" form-floating">
              <input
                type="longdes2"
                value={longdes2}
                className="form-control mb-3"
                placeholder="Enter Blog Long Description2"
                onChange={(e) => setLongDes2(e.target.value)}
              />
              <label>Enter Blog Long Description2</label>
            </div>
            <div className=" form-floating">
              <input
                type="content"
                value={content}
                className="form-control mb-3"
                placeholder="Enter Blog Content"
                onChange={(e) => setContent(e.target.value)}
              />
              <label>Enter Blog Content</label>
            </div>
            <div className=" form-floating">
              <input
                type="tags"
                value={tags}
                className="form-control mb-3"
                placeholder="Enter Blog Tags"
                onChange={(e) => setTags(e.target.value)}
              />
              <label>Enter Blog Tags</label>
            </div>
            
            
           
           
            
           
            <button type="submit" className="form-control">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlogs;
