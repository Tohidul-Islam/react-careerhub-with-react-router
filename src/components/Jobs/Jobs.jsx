import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Jobs = () => {
    return (
        <div>
            {/* Cover Area */}
            <div className="hero  py-20 bg-blue-100">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Jobs</h1>
                    </div>
                </div>
            </div>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Jobs;