import React from 'react';

const QuestionAnswer = () => {
    return (
        <div className='bg-body-secondary p-2 mt-2 '>
        <div><h2>Question & Answer</h2></div>
        <div className='m-auto bg-light'>
            <h3>Difference Between Props & State</h3>
            <p>To use props we can pass data from one component to another component But to use state we can pass data into same component.On the other hand props is immutable but state is mutable.</p>
        </div>
        <div className='m-auto bg-light'>
            <h3>How use state work?</h3>
            <p>UseState work for change a state. when a state value will change then useState can update the sate value. Then re-render the state.</p>
        </div>
        <div className='m-auto bg-light'>
            <h3>What are do the useEffect? </h3>
            <p>UseEffect work-</p>
            <ol type='number'>
                <li>Fetching Data</li>
                <li>Directly updating the DOM</li>
                <li>Timers</li>
            </ol>
        </div>
        <div className='m-auto bg-light'>
            <h3>How dose react work?</h3>
            <p>Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM. React only changes what needs to be changed! React finds out what changes have been made, and changes only what needs to be changed.   
            </p>

        </div>
            
        </div>
    );
};

export default QuestionAnswer;