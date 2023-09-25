import React from 'react';

const Header = () => {
    return (
        <div className='d-flex justify-content-between align-items-center mt-0'>
            <div className='text-center'>
                <h3>Knowledge Cafe</h3>
            </div>
            <div>
                <img className='w-100' src="profile.png" alt="" />
            </div>      
        </div>
    );
};

export default Header;