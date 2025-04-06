import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar></Navbar>

      <div className="blog-container grid grid-cols-3">
        <div className="left-container col-span-2">
          <Blogs></Blogs>
        </div>
        <div className="right-container">
          ge
        </div>
      </div>

    </>
  )
}

export default App
