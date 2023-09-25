/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {

    const [donation, setDonation] = useState([])
    const [noFound, setNoFound] = useState(false)
    const [isShow, setIsShow] = useState(false)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(()=>{
        const donateCategory = JSON.parse(localStorage.getItem('donate'));
       

        if(donateCategory){
            setDonation(donateCategory)

        const total = donateCategory.reduce((preValue,currentCategory)=> preValue + currentCategory.price,0)
        console.log(total);
        }
        else{
            setNoFound('No Data Found')
        }

    },[])

    console.log(donation);
   

    return <div> { noFound ? <p className="h-[80vh] flex justify-center items-center">{noFound}</p> 
    : 
    <div>
        <div>
            <h1>Total Donation : {totalPrice}</h1>
        </div>
        <div className="grid grid-cols-2">
            {
                isShow ? donation.map(category => (
                    <DonationCard key={category.id} category={category}></DonationCard>
                    ))
                    
                    : donation.slice(0,4).map(category => (
                        <DonationCard key={category.id} category={category}></DonationCard>
                    ))
            }
        </div>
        {donation.length > 4 && <button onClick={()=>setIsShow(!isShow)} className="px-5 bg-green-200 block mx-auto">
            {isShow ? "See Less" : "See All"}
            </button>}
        </div>}</div>;
    
};

export default Donation;