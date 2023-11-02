import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleReadTime,handleBookmark}) => {
    const [data,setData] = useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data =>setData(data));
    },[])
    return (
        <>
             {
                data.map(singleData => <Blog singleData = {singleData} key={singleData.id} handleReadTime={handleReadTime} handleBookmark={handleBookmark}></Blog>)
             }
        </>
    );
};

export default Blogs;