import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Admin.css"

const ViewBlogs = () => {
  const [blogs, setBlogs] = useState([]);
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
  const [_id, setId] = useState("");
  useEffect(() => {
    axios
      .get(`https://arambam-server.onrender.com/blogs`)
      .then((res) => setBlogs(res.data))
      .catch((err) => console.log(err));
  });
  const deleteBlog = (blogId) => {
    axios
      .delete(`https://arambam-server.onrender.com/blogs/${blogId}`)
      .then(() => alert("Your Selected Blog was Deleted"))
      .catch((err) => console.log(err));
  };
  const getOneRecord = (blogId) => {
    axios
      .get(`https://arambam-server.onrender.com/blogs/${blogId}`)
      .then((res) => {
        setImage(res.data.image);
        setImage1(res.data.image1);
        setTitle(res.data.title);
        setAuthor(res.data.author);
        setDate(res.data.date);
        setCategory(res.data.category);
        setRating(res.data.rating);
        setQuote(res.data.quote);
        setReadingTime(res.data.readingtime);
        setShortDes(res.data.shortdes);
        setLongDes1(res.data.longdes1);
        setLongDes2(res.data.longdes2);
        setContent(res.data.content);
        setTags(res.data.tags);
        setId(res.data._id);
      })
      .catch((err) => console.log(err));
  };
  const updateEnq = (e) => {
    e.preventDefault();
    axios
      .put(`https://arambam-server.onrender.com/blogs/${_id}`, {
       image,image1,
        title,author,date,category,rating,quote,readingtime,shortdes,longdes1,longdes2,content,tags,
        _id,
      })
      .then((res) => alert("Blog Updated"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="container py-5 viewblogs">
      <h1 className="text-center mb-4 fs-2 fw-bold text-uppercase " style={{color:"#2E7D32",fontFamily:"Savate"}}>View Blogs</h1>
      <table className="table table-bordered">
        <thead>
          <tr className="text-center">
            <th>Image_URL</th>
            <th>Image_URL1</th>
            <th>Title</th>
            <th>Author</th>
            <th>Date</th>
            <th>Category</th>
            <th>Rating</th>
            <th>Quote</th>
            <th>Reading Time</th>
            
            <th>Content</th>
            <th>Tags</th>
            
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog, index) => {
            return (
              <tr key={index}>
                <td>
                  <img
                  src={blog.image}
                  className="w-100 h-100"
                  alt="error"
                /></td>
                <td>
                  <img
                  src={blog.image1}
                  className="w-100 h-100"
                  alt="error"
                /></td>
                <td>{blog.title}</td>
                <td>{blog.author}</td>
                <td>{blog.date}</td>
                <td>{blog.category}</td>
                <td>{blog.rating}</td>
                <td>{blog.quote}</td>
                <td>{blog.readingtime}</td>
                
                <td>{blog.content}</td>
                <td>{blog.tags}</td>
                <td>
                  <button
                    className="btn btn-primary mb-3 "
                    onClick={() => getOneRecord(blog._id)}
                    data-bs-target="#update"
                    data-bs-toggle="modal"
                  >
                    <i className="bi bi-pencil-square"></i>
                  </button>
                  <button
                    onClick={() => deleteBlog(blog._id)}
                    className="btn btn-danger"
                  >
                   <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="modal fade" id="update" data-bs-backdrop="static">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="text-center mb-2 fs-3 fw-bold text-uppercase "
            style={{ color: "#2E7D32" }}>Update Blog</h5>
              <button data-bs-dismiss="modal" className="btn-close"></button>
            </div>

            <div className="modal-body">
              <form onSubmit={updateEnq}>
                
            
              <input
                type="image_url"
                value={image}
                className="form-control mb-3"
                placeholder="Enter Blog Image"
                onChange={(e) => setImage(e.target.value)}
              />
             
              <input
                type="image_url1"
                value={image1}
                className="form-control mb-3"
                placeholder="Enter Blog Image1"
                onChange={(e) => setImage1(e.target.value)}
              />
             
              <input
                type="quote"
                value={quote}
                className="form-control mb-3"
                placeholder="Enter Blog Quote"
                onChange={(e) => setQuote(e.target.value)}
              />
          
              <input
                type="title"
                value={title}
                className="form-control mb-3"
                placeholder="Enter Blog Title"
                onChange={(e) => setTitle(e.target.value)}
              />
              
              <input
                type="author"
                value={author}
                className="form-control mb-3"
                placeholder="Enter Blog Author"
                onChange={(e) => setAuthor(e.target.value)}
              />
             
              <input
                type="name"
                value={date}
                className="form-control mb-3"
                placeholder="Enter Blog Date"
                onChange={(e) => setDate(e.target.value)}
              />
            
    
              <input
                type="category"
                value={category}
                className="form-control mb-3"
                placeholder="Enter Blog Category"
                onChange={(e) => setCategory(e.target.value)}
              />
          
              <input
                type="rating"
                value={rating}
                className="form-control mb-3"
                placeholder="Enter Blog Rating"
                onChange={(e) => setRating(e.target.value)}
              />
             
              <input
                type="readingtime"
                value={readingtime}
                className="form-control mb-3"
                placeholder="Enter Blog Reading Time"
                onChange={(e) => setReadingTime(e.target.value)}
              />
              
              <input
                type="shortdes"
                value={shortdes}
                className="form-control mb-3"
                placeholder="Enter Blog Short Description"
                onChange={(e) => setShortDes(e.target.value)}
              />
              
              <input
                type="longdes1"
                value={longdes1}
                className="form-control mb-3"
                placeholder="Enter Blog Long Description1"
                onChange={(e) => setLongDes1(e.target.value)}
              />
              
              <input
                type="longdes2"
                value={longdes2}
                className="form-control mb-3"
                placeholder="Enter Blog Long Description2"
                onChange={(e) => setLongDes2(e.target.value)}
              />
            
              <input
                type="content"
                value={content}
                className="form-control mb-3"
                placeholder="Enter Blog Content"
                onChange={(e) => setContent(e.target.value)}
              />
            
              <input
                type="tags"
                value={tags}
                className="form-control mb-3"
                placeholder="Enter Blog Tags"
                onChange={(e) => setTags(e.target.value)}
              />
              
            
            
           
           
            
           
         
                <button type="submit" className="btn btn-primary submit form-control">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBlogs;
