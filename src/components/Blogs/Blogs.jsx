import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [data,setData] = useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data =>setData(data));
    },[])
    return (
        <>
             {
                data.map(singleData => <Blog singleData = {singleData} key={singleData.id}></Blog>)
             }
        </>
    );
};

export default Blogs;