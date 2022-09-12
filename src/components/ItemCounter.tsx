import * as React from 'react';

export interface ItemCounterProps{
    totalPostCount:number;
    currentPage: number;
    postsPerPage:number;
}

const ItemCounter:React.FC<ItemCounterProps> = ({postsPerPage,currentPage,totalPostCount}) =>{

    return(
        <div>
            <span>
                {currentPage < 2 ? 
                currentPage : 
                (currentPage * postsPerPage + 1) - postsPerPage} 
            </span>
             -
            <span>{currentPage * postsPerPage} of</span>
            <span>
                {totalPostCount}
            </span>
        </div>)
}

export default ItemCounter;