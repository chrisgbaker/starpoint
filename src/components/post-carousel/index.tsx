import * as React from 'react'
import { Post } from '../../types'

//let's ignore those dangerouslySetInnerHTMLs for now...
const iterateOverPosts = (post: Post, index: number) => {
    return (<div key={index}>
        <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} /> 
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} /> 
    </div>)
};

const PostCarousel: React.SFC<{posts: Post[]}> = ({posts}): JSX.Element => {
    return (<div>{posts.map(iterateOverPosts)}</div>);
}

export default PostCarousel;
