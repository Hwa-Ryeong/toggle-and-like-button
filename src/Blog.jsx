import React from 'react';
import Article from './Article'
import * as FooBar from './Componant/FooBar';
import Hoge from './Componant/Hoge'
// class Blog extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             isPublished: false,
//             count: 0
//         }
//     }

//     togglePublished =()=> {
//         this.setState ({
//             isPublished: !this.state.isPublished

//         })
//     }

//     componentDidMount() {
//         document.getElementById('counter').addEventListener('click', this.countUp)
//     }

//     componentDidUpdate(){
//         if(this.state.count >= 10){
//             this.setState({count: 0})

//         }
//     }

//     componentWillUnmount(){
//         document.getElementById('counter').removeEventListener('click', this.countUp)
//     }

//     countUp = () => {
//         this.setState({count: this.state.count + 1 });
//     }


//     render(){
//         const authorname="sasha";
//         return(
//             <div>
//                 <Article 
//                     title={"How to use React"}
//                     isPublished = {this.state.isPublished}
//                     toggle = {()=> this.togglePublished()}
//                     count = {this.state.count}
//                 />
//                 <FooBar.Foo/>
              
//                <Hoge/>

//             </div>
//         )
//     }
// }

const Blog = () => {
  
    return (
        <>
            <Article
                title={"React"}
            />
        </>
    );
}


export default Blog