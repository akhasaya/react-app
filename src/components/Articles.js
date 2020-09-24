import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import './Articles.css';


export default function Articles () {
    const [loading, setLoading] = useState();
    const [startNumber, setStartNumber] = useState();
    const [endNumber, setEndNumber] = useState();
    const [articles, setArticles] = useState();
    const [numArticles, setArticleNum] = useState();

    useEffect(() => {
        const fetchArticles = async () => {
            setStartNumber(0);
            setEndNumber(10);
            console.log("sending request");
            const url = "https://public-api.wordpress.com/rest/v1.1/sites/107403796/posts/";
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setLoading(false);
            setArticles(data.posts);
            setArticleNum(data.posts.length);
        }
        fetchArticles();
    }, [])

    const displayNextPage = () => {
        console.log("next page function")
        setStartNumber(endNumber + 1);
        setEndNumber(endNumber + 10);
    }

    const calculateTimeDiff = (articleTime) => {
        const aT = new Date(articleTime);
        const aD = aT.toLocaleDateString();
        
        const bT = new Date();
        const bD = bT.toLocaleDateString();
        const diff_mill_sec = bT - aT;
        
        const diff_days = Math.floor(diff_mill_sec/(1000*60*60*24));
        if (diff_days === 0) {
            const diff_hours = Math.floor(diff_mill_sec/(1000*60*60));
            if (diff_hours === 0) {
                const diff_mins = Math.floor(diff_mill_sec/(1000*60));
                if (diff_mins === 0) {
                    return "Just now";
                }
                else {
                    return diff_mins+ " minutes ago";
                }
            }
            else {
                return diff_hours +" hours ago";
            }
        } else {
            return diff_days+" days ago";
        }   
    }

    return (
            <div>
                {loading || !articles ? (<div>Loading...</div>) : 
                    (<div>
                        <div className = "ListThem">
                            {articles.slice(startNumber, endNumber).map(article => (
                                <Link to={'/posts/' + article.ID}>
                                    <div className = "Article-container">
                                        <img className="Thumbinal" alt={article.slug} src={article.post_thumbnail.URL}></img> 
                                        <div className="Title"> <div dangerouslySetInnerHTML={{__html: article.title}} /></div>
                                        <div className="Content"> 
                                            {calculateTimeDiff(article.date)}
                                            <p> 
                                                <div dangerouslySetInnerHTML={{__html: article.excerpt}} />
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <div className="footer">
                            <button variant="primary" onClick={displayNextPage.bind(this)}>Previous Page</button>
                            <button variant="primary" onClick={displayNextPage.bind(this)}>Next Page</button>
                        </div>
                    </div>)
                }
            </div>
        );
}