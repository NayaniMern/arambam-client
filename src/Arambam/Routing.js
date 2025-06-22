import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";

import Blogs from "./Blogs";
import Contact from "./Contact";
import Admin from "./Admin/Login";
import Dashboard from "./Admin/Dashboard";


import BlogDetails from "./BlogDetails";
import NoPage from "./NoPage";
import Welcome from './Admin/Welcome'
import AddBlogs from './Admin/AddBlogs'
import ViewBlogs from './Admin/ViewBlogs'


import ViewEnquiries from './Admin/ViewEnquiries'

import Login from "./Admin/Login";

import WriteForUs from "./WriteForUs";
import ViewArticles from "./Admin/ViewArticles";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/about" Component={About} />
      <Route path="/blogs" Component={Blogs} />

      <Route path="/blogDetails/:id" Component={BlogDetails} />

      <Route path="/contact" Component={Contact} />
      <Route path="/writeforus" Component={WriteForUs} />
   
      <Route path="/admin" Component={Login} />

      <Route path="*" Component={NoPage} />
      <Route path="/dashboard" Component={Dashboard}>
        <Route path="" Component={Welcome} />
        <Route path="addBlogs" Component={AddBlogs} />
        <Route path="viewBlogs" Component={ViewBlogs} />
        <Route path="viewEnquiries" Component={ViewEnquiries} />
        <Route path="viewArticles" Component={ViewArticles} />
         <Route path="logout" Component={Admin} />
      </Route>
    </Routes>
  );
};

export default Routing;
