import React from 'react'

//let's ignore those dangerouslySetInnerHTMLs for now...
const iterateOverPosts = (post, index) => {
    return (<div key={index}>
        <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} /> 
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} /> 
    </div>)
};

const PostCarousel = ({posts}) => {
    return (<div>{posts.map(iterateOverPosts)}</div>);
}

export default PostCarousel;
