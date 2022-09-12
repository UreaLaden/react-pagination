import * as React from 'react';
import Posts from './components/Posts';
import {Post} from './components/Posts';
import Pagination from './components/Pagination';

import axios from 'axios';

const App:React.FC = () =>{
    const [posts,setPosts] = React.useState<Post[]>([])
    const [loading,setLoading] = React.useState(false)
    const [currentPage,setCurrentPage] = React.useState(1)
    const [postsPerPage] = React.useState(5)

    React.useEffect(() =>{
        const fetchPosts = async ()=>{
            setLoading(true);
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(res.data);
            setLoading(false);
        }
        fetchPosts();
    },[])

    const paginate = (pageNumber:number):void => setCurrentPage(pageNumber);
    
    //Get current post
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);
    return (
        <div className='container mt-5'>
            <h1 className="text-primary mb-3">My Pagination Test</h1>
            <Posts posts={currentPosts} loading={loading} />
            <Pagination 
                totalPosts={posts.length} 
                postsPerPage={postsPerPage} 
                paginate={paginate}
                currentPage={currentPage}/>
        </div>
    )
}

export default App;

