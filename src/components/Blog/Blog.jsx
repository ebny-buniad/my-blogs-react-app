import React from 'react';
import { CiPen } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { CiBookmarkCheck } from "react-icons/ci";



const Blog = ({ blog, handelBookMark, handelMarkAsRead }) => {
    // console.log(blog.id)
    const { cover, title, author, posted_date } = blog;
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img
                        src={cover}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className='flex justify-between'>
                        <p className='flex items-center gap-2'><CiPen size={20} /> {author}</p>
                        <p className='flex items-center gap-2'><CiCalendarDate size={20} />{posted_date}</p>
                        <button onClick={() => { handelBookMark(blog) }} className='cursor-pointer'><CiBookmarkCheck size={20} /></button>
                    </div>
                    <h2 className="card-title">{title}</h2>
                    <div className="card-actions justify-end">
                        <button onClick={() => handelMarkAsRead(blog.reading_time, blog.id)} className="btn btn-primary">Remove from Bookmark</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;