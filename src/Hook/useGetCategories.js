import { useEffect, useState } from "react";


const useGetCategories = () => {

    const [categories,setCategories] = useState()

    useEffect(()=>{

        fetch('/donation.json')
        .then(res=>res.json())
        .then(data => setCategories(data))

    },[])
    

    return [categories]

};

export default useGetCategories;