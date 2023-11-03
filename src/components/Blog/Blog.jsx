import React from 'react';
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Blog = ({singleData,handleReadTime,handleBookmark}) => {
    const {id,cover_image,author_name,Blog_title,image,readTime,publish_Date}= singleData
    return (
        <>
           <div className=' mb-3 border border-0'>
                <img className='w-100' src={cover_image} alt="" />
                
                <div className='d-flex justify-content-between mt-3'>
                    <div className='d-flex align-items-center'>
                        <div >
                            <img className='author-image' src={image} alt="" />
                        </div>
                        <div className='ms-3'>
                            <h5>{author_name}</h5>
                            <p className='d-flex align-items-start'>{publish_Date}</p>
                        </div>
                    </div>
                    <div>
                        <p>{readTime} min read <span onClick={()=>handleBookmark(Blog_title,id)} className='cursorControl'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                            </svg>
                        </span></p>
                        
                    </div>
                </div>     
                <h2 className='d-flex align-items-start'>{Blog_title}</h2>
                <p className='d-flex align-items-start'>#beginners #programming</p>
                <button onClick={()=>handleReadTime(readTime)} className='d-flex align-items-start border border- btn btn-primary'>mark as read</button>
           </div>
        </>
    );
};

export default Blog;