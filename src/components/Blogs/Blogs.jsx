import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {

    const[blogs, setBlogs] = useState([]);
    console.log(blogs)

    useEffect(() => {
        fetch("blogs.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div>
            <h1 className='text-2xl font-semibold'>Total Blog: {blogs.length}</h1>
            {
                blogs.map((blog) => <Blog blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;