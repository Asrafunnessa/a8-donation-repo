import { useEffect, useState } from "react";
import Category from "./Category";
const Categories = () => {

        const [categories, setCategories] = useState([]);
        // this is not the best way to load show all data 
        // const [dataLength, setDataLength] = useState(4);
    
        useEffect(() => {
            fetch('donation.json')
                .then(res => res.json())
                .then(data => setCategories(data));
        }, [])

    return (
       <div>
         <div className="py-10">
           <h1 className="text-2xl text-center">All Categories Donation: {categories.length}</h1> 
        </div>
           <div className="grid grid-cols-4 gap-6">
           {
            //categories.slice(0, dataLength).map(category => <Category key={category.id} category={category}></Category>)
            categories.map(category => <Category key={category.id} category={category}></Category>)

           }
       </div>
       </div>
         
    );
};

export default Categories;