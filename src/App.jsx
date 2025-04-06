import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {

  const [bookmarked, setBookMarked] = useState([]);

  const handelBookMark = (blog) => {
    setBookMarked([...bookmarked, blog])
  }

  return (
    <>
      <Navbar></Navbar>

      <div className="blog-container grid grid-cols-3">
        <div className="left-container col-span-2">
          <Blogs handelBookMark={handelBookMark}></Blogs>
        </div>
        <div className="right-container">
          {
            bookmarked.map((marked) =>  <p key={marked.id}>{marked.title}</p>)
          }
        </div>
      </div>

    </>
  )
}

export default App
