import React from 'react';
import './Blog.css'

const Blog = ({singleData}) => {
    const {cover_image,author_name,Blog_title,image,readTime,publish_Date}= singleData
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
                        <p>{readTime} min read</p>
                    </div>
                </div>     
                <h2 className='d-flex align-items-start'>{Blog_title}</h2>
                <p className='d-flex align-items-start'>#beginners #programming</p>
                <button className='d-flex align-items-start border border- btn btn-primary'>mark as read</button>
           </div>
        </>
    );
};

export default Blog;