
const Category = ({ category }) => {
    const { logo, category_name, availability } = category;
    return (
        <div className="bg-gray-100 px-4 py-6 rounded">
            <div>
                <img src={logo} alt="" className="bg-gray-200 rounded-md p-3" />
            </div>
            <h2 className="text-2xl font-bold py-2">{category_name}</h2>
            <p className="text-base text-gray-500 font-semibold">{availability}</p>
        </div>
    );
};

export default Category;