const Category = ({category}) => {
    const { id, image, category_name, title } = category;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div>
            <button className="px-5 py-2 font-extrabold border
             rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{category_name}</button>
             </div>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                </div>
            </div>
    );
};

export default Category;