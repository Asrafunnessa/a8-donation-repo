import Categories from "../../components/Categories/Categories";
import Banner from "../../components/Header/Banner/Banner";
import useGetCategories from "../../Hook/useGetCategories";

const Home = () => {
    
        
        const [categories] = useGetCategories()
    
    

    return (
        <div>
           <Banner></Banner>
           <Categories categories ={categories}></Categories>
        </div>
    );
};

export default Home;