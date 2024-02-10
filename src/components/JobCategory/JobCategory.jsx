import { useEffect, useState } from "react";
import Category from "../Category/Category";

const JobCategory = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('../../../public/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className="max-w-6xl mx-auto py-10">
            <div className="text-center py-5">
                <h2 className="text-5xl font-bold py-2">Job Category List {categories.length}</h2>
                <p className="py-2">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-4 gap-5">
                {
                    categories.map(category => <Category
                        key={category.id}
                        category={category}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default JobCategory;