/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
const EachCategoryCard = ({ category }) => {

    // const { id, image, title, description } = category || {}
    const { image, title, description } = category || {}


    // return (
    //     <div className="flex justify-center items-center h-[80vh]">
    //       <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
    //         <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    //           <img src={image} alt="image" className="h-full w-full object-cover" />
    //         </div>
    //         <div className="p-6">
    //           <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
    //             {title}
    //           </h6>
    //           <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
    //             {description}
    //           </h4>
    
    //           <a className="inline-block" href="#">
    //             <button
    //             //   onClick={handleAddToFavorites}
    //               className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    //               type="button"
    //             >
    //               Add To favorites
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 stroke-width="2"
    //                 stroke="currentColor"
    //                 aria-hidden="true"
    //                 className="h-4 w-4"
    //               >
    //                 <path
    //                   stroke-linecap="round"
    //                   stroke-linejoin="round"
    //                   d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
    //                 ></path>
    //               </svg>
    //             </button>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   );
    // };


    return (

//         <Link to={`/categories/${id}`}>
//             <div>
//                 <div className="relative flex w-70 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md transition-all hover:scale-105 
//       focus:scale-105 focus:opacity-[0.85]
//        active:scale-100 active:opacity-[0.85]
//         disabled:pointer-events-none disabled:opacity-50
//          disabled:shadow-none">
//                     <div className="relative mx-4 mt-4 h-60 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
//                         <img
//                             src={image}
//                             className="h-full w-full object-cover"
//                         />
//                     </div>

//                     <div className="p-6 pt-0">
//                         <button
//                             className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//                             type="button"
//                             data-ripple-light="true"
//                         >
//                             Donate$290
//                         </button>
//                     </div>

//                     <div className="p-6">
//                         {/* <div className="mb-2 flex items-center justify-between">
//                         <button className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
//                             {category_name}
//                         </button>

//                         {/* <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">
//                         {category_name}
//                     </button> */}
//                         {/* </div>  */}

//                         <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
//                             {title}
//                         </p>
//                     </div>
//                     {/* <div className="p-6 pt-0">
// <button
//   className="block w-full select-none
//    rounded-lg bg-blue-gray-900/10 py-3
//     px-6 text-center align-middle font-sans
//      text-xs font-bold uppercase text-blue-gray-900
//       transition-all hover:scale-105 
//       focus:scale-105 focus:opacity-[0.85]
//        active:scale-100 active:opacity-[0.85]
//         disabled:pointer-events-none disabled:opacity-50
//          disabled:shadow-none"
//   type="button"
// >
//   Add to Cart
// </button>
// </div> */}
//                 </div>
//             </div>
//         </Link>



                <div className="flex justify-center items-center h-[80vh]">
         <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md justify-center">
          <div className="relative mx-4 -mt-6  h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
            <img
              src={image}
              alt="img-blur-shadow" className="w-full h-full object-cover" layout="fill"
            />
          </div>
          <div className="p-6 pt-0">
            <button
            //   onClick={handleAddDonate}
              className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              Donate$290
            </button>
          </div>
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {title}
            </h5>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              {description}
            </p>
          </div>
          {/* <div className="p-6 pt-0">
            <button
              className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              Read More
            </button>
          </div> */}
        </div>
                </div>
    );
};

export default EachCategoryCard;