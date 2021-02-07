
import React, {useState} from 'react';
import LikeButton from './likeButton';

/*
props = {
    name: 'Sasha'
}
*/

const Article = (props) => {
    const [isPublished, togglePublished] = useState(false);
    // let publishState = '';
    // if (props.isPublished){
    //     publishState ="published"

    // } else {
    //     publishState = "not published"
    // }
    
    return (
        <div>
            <h2>{props.title}</h2>
            <p>Order is {props.order}</p>
            <p>Author is {props.author}</p>
            <lable htmlfor='check'>公開状態：</lable>
            <input type='checkbox' checked={isPublished} id='check' onClick={() => togglePublished(!isPublished)}/>
            
            <LikeButton />

        </div> 
    )
}

export default Article


// <Article name="Sasha" />  =  <div>hello Sasha</div>



// function add(a, b) {
//     return a + b;
// }

// add(1, 2);