/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {


    const { id, image, category_name, category_bg, card_bg, text_bg, title, } = category || {}

    // const category_bg = {
    //     backgroundColor: category_bg,
    //     color: text_bg
    // }

    return (
        <Link to={`/categories/${id}`}>
            <div>
                <div className="relative flex w-70 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md transition-all hover:scale-105 
          focus:scale-105 focus:opacity-[0.85]
           active:scale-100 active:opacity-[0.85]
            disabled:pointer-events-none disabled:opacity-50
             disabled:shadow-none">
                    <div className="relative mx-4 mt-4 h-60 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                        <img
                            src={image}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <div className="mb-2 flex items-center justify-between">
                            <button className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                                {category_name}
                            </button>
                        </div>
                        <p  className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            {title}
                        </p>
                    </div>
                    {/* <div className="p-6 pt-0">
    <button
      className="block w-full select-none
       rounded-lg bg-blue-gray-900/10 py-3
        px-6 text-center align-middle font-sans
         text-xs font-bold uppercase text-blue-gray-900
          transition-all hover:scale-105 
          focus:scale-105 focus:opacity-[0.85]
           active:scale-100 active:opacity-[0.85]
            disabled:pointer-events-none disabled:opacity-50
             disabled:shadow-none"
      type="button"
    >
      Add to Cart
    </button>
  </div> */}
                </div>
            </div>
        </Link>
    );
};

export default Category;