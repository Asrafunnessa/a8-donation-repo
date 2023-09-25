/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import { useEffect, useState } from "react";
// import Category from "./Category";
// const Categories = () => {

//         const [categories, setCategories] = useState([]);
//         // this is not the best way to load show all data 
//         const [dataLength, setDataLength] = useState(4);
    
//         useEffect(() => {
//             fetch('donation.json')
//                 .then(res => res.json())
//                 .then(data => setCategories(data));
//         }, [])

//     return (
//        <div>
//          <div className="py-10">
//            <h1 className="text-2xl text-center">All Categories Donation: {categories.length}</h1> 
//         </div>
//            <div className="grid grid-cols-4 gap-6">
//            {
//             //categories.slice(0, dataLength).map(category => <Category key={category.id} category={category}></Category>)
//             categories.slice(0, dataLength).map(category => <Category key={category.id} category={category}></Category>)

//            }
//        </div>
//        <div className={dataLength === categories.length ? 'hidden' : ''}>
//                 <button
//                     onClick={() => setDataLength(categories.length)}
//                     className="btn btn-primary">Show All Jobs</button>
//             </div>
//        </div>
         
//     );
// };

// export default Categories;

// import React, { useEffect, useState } from "react";
// import { useLoaderData, useParams } from "react-router-dom";
// import Category from "./Category";


// const Categories = () => {
//   const [category, setCategory] = useState({});

//   const { id } = useParams();

//   const categories = useLoaderData();

//   useEffect(() => {

    
//     const findCategory = categories?.find((category) => category.id === id);

//     setCategory(findCategory);
//   }, [id, categories]);


//   return (
//     <div>
//         <Category category={category}></Category>
//     </div>
//   );
// };

// export default Categories;


import React from 'react';
import Category from "./Category";
import useGetCategories from '../../Hook/useGetCategories';

const Phones = ({categories}) => {



    console.log(categories);
    return (
        <div className='py-10'>
            {/* <h1 className='text-2xl text-center'></h1> */}

            {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10'> */}
            <div className="grid grid-cols-4 gap-6">
                {
                    categories?.map(category=><Category key={category.id} category={category}></Category> )
                }
            </div>
        </div>
    );
};

export default Phones;