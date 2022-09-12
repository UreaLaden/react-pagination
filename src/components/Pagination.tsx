import * as React from 'react';
import ItemCounter from './ItemCounter';

export interface PaginationProps{
    totalPosts:number;
    postsPerPage:number;
    paginate: (pageNumber:number) => void;
    currentPage: number
}
const Pagination:React.FC<PaginationProps> = ({totalPosts,postsPerPage,paginate,currentPage}) =>{
    const pageNumbers = [];

    for(let i=1;i<= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }
    return(
        <nav>
            <ItemCounter 
                    totalPostCount={totalPosts}
                    currentPage={currentPage}
                    postsPerPage = {postsPerPage}/>            
            <ul className='pagination'>
                {pageNumbers.map(number => 
                    <li key={number} className='page-item'>
                        <a 
                            onClick={() => paginate(number)} 
                            href="!#"
                            className='page-link'>{number}</a>
                    </li>)}
            </ul>
        </nav>)
}

export default Pagination;