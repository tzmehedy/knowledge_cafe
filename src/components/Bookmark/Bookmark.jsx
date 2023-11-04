import React, { useEffect, useState } from 'react';

const Bookmark = ({readTime,blogName}) => {
    const [updateReadTime,setUpdateReadTime] = useState(0);
    const [updateBlogName,setUpdateBlogName] = useState({});
    // console.log(Object.values(updateBlogName).length);
    
    useEffect(()=>{
        const blogNameFromLS = JSON.parse(localStorage.getItem("blogName"))
        setUpdateBlogName(blogNameFromLS);
        
    },[blogName])

    useEffect(()=>{
        const readTimeFromLS = localStorage.getItem("readTime");
        setUpdateReadTime(readTimeFromLS);
    },[readTime])

    return (
        <div>
            <div className='bg-body-secondary p-2 '>
                <h4 className='text-primary m-auto bg-light'>Spend Time On Read: {updateReadTime} min</h4>
            </div>
            <div>
                <div className='bg-body-secondary p-2 mt-2 ' >
                    <h5 className='m-auto bg-light'>Bookmarked Blogs: {updateBlogName && Object.values(updateBlogName).length}</h5>
                    </div>
                {
                  updateBlogName && Object.values(updateBlogName).map(value=>
                   <div className='bg-body-secondary p-2 mt-2 '>
                            <p className='m-auto bg-light'>{value}</p>
                </div>)
                }

                
            </div>
        </div>
    );
};

export default Bookmark;