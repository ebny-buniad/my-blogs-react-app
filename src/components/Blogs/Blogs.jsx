import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);
    console.log(blogs)

    useEffect(() => {
        fetch("blogs.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='p-2'>
            <h1 className='text-2xl font-semibold mb-3'>Total Blog: {blogs.length}</h1>
            <div className='grid grid-cols-2 gap-3'>
                {
                    blogs.map((blog) => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;