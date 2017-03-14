import * as React from 'react'
import { Post, ImmutableMap } from '../../types'

//let's ignore those dangerouslySetInnerHTMLs for now...
const iterateOverPosts = (post: any, index: number) => {
    debugger;
    return (<div key={index}>
        <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} /> 
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} /> 
    </div>)
};

const PostCarousel: React.SFC<{posts: Post[]}> = ({posts}): JSX.Element => {
    debugger;
    return (<div>{posts.map(iterateOverPosts)}</div>);
}

export default PostCarousel;
