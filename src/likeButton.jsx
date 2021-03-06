import React, {useState, useEffect} from 'react'

const LikeButton = (props) => {
    const [count, counter] = useState(0);
    const countUp =() =>{
        counter(count + 1)
    }

    useEffect(()=> {
        document.getElementById('counter').addEventListener('click', countUp)
        if(count >= 10) {
            counter(0);
        }
        return () => {
            document.getElementById('counter').removeEventListener('click', countUp)
        }
    });

    return(
        <button id={"counter"} ># of likes: {count} </button>
    )
};

export default LikeButton