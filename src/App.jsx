import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar></Navbar>

      <div className="blog-container grid grid-cols-3">
        <div className="left-container col-span-2 border">
          <Blogs></Blogs>
        </div>
        <div className="right-container border">
          ge
        </div>
      </div>

    </>
  )
}

export default App
