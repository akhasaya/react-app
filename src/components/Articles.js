import React from "react";
import {
    Redirect
} from 'react-router-dom';
import './Articles.css';

export default class Articles extends React.Component {
    state = {
        loading: true,
        page_number: 0,
        articles: null
    };

    async componentDidMount() {
        console.log("sending request");
        const url = "https://public-api.wordpress.com/rest/v1.1/sites/107403796/posts/";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({loading: false, 
            articles: data.posts
        });
    }

    displayNextPage() {
        console.log("next page function")
        this.setState({
            page_number: this.state.page_number + 1
        })
    }

    render() {
        return (
            <div>
                {this.state.loading || !this.state.articles ? (<div>loading...</div>) : 
                    (<div>
                        <div className = "ListThem">
                            {this.state.articles.map(article => (
                                <div className = "Article-container">
                                    <img className="Thumbinal" alt={article.slug} src={article.post_thumbnail.URL}></img> 
                                    <div className="Title"> {article.title} </div>
                                    <div className="Date"> {article.date} </div> 
                                    {/* Need to modify date value */}
                                    <div className="Excerpt"> 
                                        <p> {article.excerpt} </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="footer">
                            {/* This needs to work */}
                            <button variant="primary" onClick={this.displayNextPage.bind(this)}>Next Page</button>
                        </div>
                    </div>)
                }
            </div>
        );
    }
}