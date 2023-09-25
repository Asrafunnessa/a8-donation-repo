/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Category from "./Category";
import useGetCategories from '../../Hook/useGetCategories';

const Phones = ({categories}) => {



    console.log(categories);
    return (
        <div className='py-10'>
            <div className="grid grid-cols-4 gap-6">
                {
                    categories?.map(category=><Category key={category.id} category={category}></Category> )
                }
            </div>
        </div>
    );
};

export default Phones;