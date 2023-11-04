import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/Bookmark/Bookmark'
import Header from './components/Header/Header'
import 'bootstrap/dist/css/bootstrap.css'
import QuestionAnswer from './components/QuestionAnswer/QuestionAnswer'

function App() {
  const [readTime,setReadTime] = useState(0);
  const [blogName,setBlogName] = useState(null);

  const handleBookmark = (blogName,id)=>{
    if(localStorage.getItem("blogName") == null){
      localStorage.setItem("blogName",'[]');
    }
    var getBlogName = JSON.parse(localStorage.getItem("blogName"))
    getBlogName.push(blogName);
    localStorage.setItem("blogName",JSON.stringify(getBlogName))
    setBlogName(getBlogName);
    

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
          {/* <Blogs handleReadTime={handleReadTime}></Blogs> */}
        </div>
        <div className='col-lg-4 col-sm-12'>
          <Bookmark readTime={readTime} blogName={blogName}></Bookmark>
        </div>
        <div>
          <QuestionAnswer></QuestionAnswer>
        </div>
      </div>
      
    </>
  )
}

export default App
