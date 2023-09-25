// import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const EachCategory = () => {

    // const [EachCategory, setEachCategory] = useState();

    const params = useParams()
    console.log(params);

    const categories = useLoaderData()
    console.log(categories);

    return (
        <div>
            <h1>Category</h1>
        </div>
    );
};

export default EachCategory;