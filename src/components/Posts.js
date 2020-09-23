import React, {useState, useEffect} from 'react';
import './Posts.css';

function Posts({match}) {
    useEffect(()=>{
        fetchPost();
        console.log(match);
    }, []);
    
    const [postItem, setItem] = useState({
        author:{},
        content: null
    });

    const fetchPost = async () => {
        console.log(match.params.id);
        const data = await fetch(
            `https://public-api.wordpress.com/rest/v1.1/sites/107403796/posts/${match.params.id}`
            );
        const postitem = await data.json();
        setItem(postitem);
        console.log(postitem);
    }
    
    return (
            <div>
                <h1> {postItem.title} </h1>
                <p> {postItem.date} </p>
                <p> {postItem.author.name} </p>
                <html> <p> {postItem.content} </p> </html> 
                <img src={postItem.featured_image} alt={postItem.slug}></img>
            </div>
        );
};

export default Posts;