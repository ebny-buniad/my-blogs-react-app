import React, { useEffect, useState } from 'react';

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

        </div>
    );
};

export default Blogs;