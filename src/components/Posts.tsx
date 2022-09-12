import * as React from 'react';

export interface PostProps{
    posts:Post[];
    loading:boolean
}

export interface Post{
    id:number;
    title:string;
    body:string;
}

const Posts:React.FC<PostProps> = (postProps,) =>{
    

    if(postProps.loading){
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <ul className="list-group mb-4">
                
                {postProps.posts.map((post,idx) => {
                    return(
                        <li 
                            key={post.id} 
                            className={'list-group-item'}>
                            {post.title}
                        </li>
                        )
                    }
                )}
            </ul>
        </div>
            )
}

export default Posts;