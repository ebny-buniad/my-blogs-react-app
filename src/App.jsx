import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {

  const [bookmarked, setBookMarked] = useState([]);
  const handelBookMark = (blog) => {
    setBookMarked([...bookmarked, blog]);
  }

  const [time, setTime] = useState(0);
  const handelMarkAsRead = (readTime, id) => {
    let reading_time = time + readTime;
    setTime(reading_time);
    handelRemoveFromBookmark(id);
  }

  const handelRemoveFromBookmark = (id) => {
    const remainingBookmark = bookmarked.filter((mark) => mark.id !== id);
    setBookMarked(remainingBookmark);
  }

  return (
    <>
      <Navbar></Navbar>

      <div className="blog-container grid grid-cols-3">
        <div className="left-container col-span-2">
          <Blogs handelBookMark={handelBookMark} handelMarkAsRead={handelMarkAsRead}></Blogs>
        </div>
        <div className="right-container ps-5 mt-5">
          <h3 className='text-xl'>Reading Time : {time}</h3>
          <h3 className='text-xl'>Bookmarked Count : {bookmarked.length}</h3>
          {
            bookmarked.map((marked) => <p className='bg-sky-500 text-white rounded-md p-2 mb-1' key={marked.id}>{marked.title}</p>)
          }
        </div>
      </div>

    </>
  )
}

export default App
