import React from 'react';

type PaginateComponentPropsTypes = {
    categoryPerPage: number,
    totalCategory: number | undefined,
    paginate: any
}

const Paginate: React.FC<PaginateComponentPropsTypes> = ({ categoryPerPage, totalCategory, paginate }) => {
    const pageNumbers = [];
    if(totalCategory != undefined){
        for (let i = 1; i <= Math.ceil(totalCategory / categoryPerPage); i++) {
            pageNumbers.push(i);
        }
    }
    return (
        <div className="pagination-container">
            <ul className="pagination">
                {pageNumbers.map((number) => (
                    <li key={number} onClick={()=>paginate(number)} className="page-number">
                        {number}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Paginate;