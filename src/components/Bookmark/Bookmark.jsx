import React, { useEffect, useState } from 'react';

const Bookmark = ({readTime}) => {
    const [updateReadTime,setUpdateReadTime] = useState(0)

    useEffect(()=>{
        const readTimeFromLS = localStorage.getItem("readTime");
        setUpdateReadTime(readTimeFromLS);
    },[readTime])

    return (
        <div>
            <div className='bg-body-secondary p-2 '>
                <h4 className='text-primary m-auto bg-light'>Spend Time On Read: {updateReadTime} min</h4>
            </div>
            <div></div>
        </div>
    );
};

export default Bookmark;