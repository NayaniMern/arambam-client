import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Admin.css";

const ViewArticles = () => {
  const [articles, setArticles] = useState([]);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [articleTitle, setArticleTitle] = useState("");
  const [category, setCategory] = useState("");
  const [article, setArticle] = useState("");
  const [authorBio, setAuthorBio] = useState("");
  const [_id, setId] = useState("");

  useEffect(() => {
    axios
      .get(`https://arambam-server.onrender.com/articles`)
      .then((res) => setArticles(res.data))
      .catch((err) => console.log(err));
  });

  const deleteArticle = (articleId) => {
    axios
      .delete(`https://arambam-server.onrender.com/articles/${articleId}`)
      .then(() => alert("Selected Article was Deleted"))
      .catch((err) => console.log(err));
  };

  const getOneRecord = (articleId) => {
    axios
      .get(`https://arambam-server.onrender.com/articles/${articleId}`)
      .then((res) => {
        setFullname(res.data.fullname);
        setEmail(res.data.email);
        setPhonenumber(res.data.phonenumber);
        setArticleTitle(res.data.articleTitle);
        setCategory(res.data.category);
        setArticle(res.data.article);
        setAuthorBio(res.data.authorBio);
        setId(res.data._id);
      })
      .catch((err) => console.log(err));
  };

  const updateArticle = (e) => {
    e.preventDefault();
    axios
      .put(`https://arambam-server.onrender.com/articles/${_id}`, {
        fullname,
        email,
        phonenumber,
        articleTitle,
        category,
        article,
        authorBio,
        _id,
      })
      .then(() => alert("Article Updated"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container py-5 viewblogs">
      <h1
        className="text-center mb-4 fs-2 fw-bold text-uppercase"
        style={{ color: "#2E7D32", fontFamily: "Savate" }}
      >
        View Articles
      </h1>
      <table className="table table-bordered">
        <thead>
          <tr className="text-center">
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Article Title</th>
            <th>Article</th>
            <th>Author Bio</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article, index) => (
            <tr key={index}>
              <td>{article.fullname}</td>
              <td>{article.email}</td>
              <td>{article.phonenumber}</td>
              <td>{article.articleTitle}</td>
              <td>{article.article}</td>
              <td>{article.authorBio}</td>
              <td>{article.category}</td>
              <td>
                <button
                  className="btn btn-primary mb-3"
                  onClick={() => getOneRecord(article._id)}
                  data-bs-toggle="modal"
                  data-bs-target="#update"
                >
                  <i className="bi bi-pencil-square"></i>
                </button>
                <button
                  onClick={() => deleteArticle(article._id)}
                  className="btn btn-danger"
                >
                  <i className="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Update Modal */}
      <div className="modal fade" id="update" data-bs-backdrop="static">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="text-center mb-2 fs-3 fw-bold text-uppercase"
                style={{ color: "#2E7D32" }}
              >
                Update Article
              </h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={updateArticle}>
                <input
                  type="text"
                  value={fullname}
                  className="form-control mb-2"
                  placeholder="Enter Full Name"
                  onChange={(e) => setFullname(e.target.value)}
                />
                <input
                  type="email"
                  value={email}
                  className="form-control mb-2"
                  placeholder="Enter Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  value={phonenumber}
                  className="form-control mb-2"
                  placeholder="Enter Phone Number"
                  onChange={(e) => setPhonenumber(e.target.value)}
                />
                <input
                  type="text"
                  value={articleTitle}
                  className="form-control mb-2"
                  placeholder="Enter Article Title"
                  onChange={(e) => setArticleTitle(e.target.value)}
                />
                <input
                  type="text"
                  value={category}
                  className="form-control mb-2"
                  placeholder="Enter Category"
                  onChange={(e) => setCategory(e.target.value)}
                />
                <textarea
                  value={article}
                  className="form-control mb-2"
                  placeholder="Enter Article Content"
                  onChange={(e) => setArticle(e.target.value)}
                />
                <textarea
                  value={authorBio}
                  className="form-control mb-2"
                  placeholder="Enter Author Bio"
                  onChange={(e) => setAuthorBio(e.target.value)}
                />
                <button
                  type="submit"
                  className="btn btn-primary submit form-control"
                >
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

export default ViewArticles;
