/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import EachCategoryCard from "./EachCategoryCard";

const EachCategory = () => {

    const [eachCategory, setEachCategory] = useState({});


    const { id } = useParams()

    const categories = useLoaderData()


    useEffect(() => {

        const findCategory = categories?.find(category => category.id === id)
        setEachCategory(findCategory)
    }, [id, categories])

    console.log(eachCategory);


    return (
        <div>
           <EachCategoryCard category={eachCategory}></EachCategoryCard>
        </div>
    );
};

export default EachCategory;