import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/Bookmark/Bookmark'
import Header from './components/Header/Header'
import 'bootstrap/dist/css/bootstrap.css'

function App() {

  return (
    <>
      <Header></Header>
      <hr />
      <div className='row'>
        <div className='col-8'>
          <Blogs></Blogs>
        </div>
        <div className='col-4'>
          <Bookmark></Bookmark>
        </div>
      </div>
      
    </>
  )
}

export default App
