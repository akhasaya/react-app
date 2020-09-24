import React, {useState, useEffect} from 'react';
import './Posts.css';

function Posts({match}) {
    useEffect(()=>{
        const fetchPost = async () => {
            const data = await fetch(
                `https://public-api.wordpress.com/rest/v1.1/sites/107403796/posts/${match.params.id}`
                );
            const postitem = await data.json();
            setItem(postitem);
            console.log(postItem);
        }
        fetchPost();
    },[]);
    
    const [postItem, setItem] = useState({
        author:{},
        content: null
    });
    
    const calculateDate = (postTime) => {
        return new Date(postTime).toLocaleDateString();
    }

    return (
            <div className="post">
                <h1> <div dangerouslySetInnerHTML={{__html: postItem.title}}/> </h1>
                <hr/>
                <div className= "Author"> 
                    <p>
                        {postItem.author.name} 
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {calculateDate(postItem.date)}
                    </p>
                </div>
                <br/>
                <div className="image">
                    <img src={postItem.featured_image} alt={postItem.slug}></img>
                </div>
                <div className="Content">
                    <p> 
                        <div dangerouslySetInnerHTML={{__html: postItem.content}} />
                    </p>
                </div>
            </div>
        );
};

export default Posts;