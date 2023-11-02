import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/Bookmark/Bookmark'
import Header from './components/Header/Header'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const [readTime,setReadTime] = useState(0);
  const [blogName,setBlogName] = useState("");

  const handleBookmark = (blogName)=>{
    const previousBookmark = localStorage
  }
  const handleReadTime = (time) =>{
    const previousReadTime = JSON.parse(localStorage.getItem("readTime"))
    if(previousReadTime){
      const sum = previousReadTime + time;
      localStorage.setItem("readTime",sum);
      setReadTime(sum);

    }
    else{
      localStorage.setItem("readTime",time);
      setReadTime(time);
    }
  }
  

  return (
    <>
      <Header></Header>
      <hr />
      <div className='row'>
        <div className='col-lg-8 col-sm-12'>
          <Blogs handleReadTime={handleReadTime} handleBookmark={handleBookmark}></Blogs>
        </div>
        <div className='col-lg-4 col-sm-12'>
          <Bookmark readTime={readTime}></Bookmark>
        </div>
      </div>
      
    </>
  )
}

export default App
