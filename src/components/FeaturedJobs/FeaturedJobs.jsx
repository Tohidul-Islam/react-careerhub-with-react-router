import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);

    // This is not the best way to s show and load all data
    const [dataLength, setDataLength] = useState(4);


    useEffect(() => {
        fetch('../../../public/jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div className="max-w-6xl mx-auto">
            <div className="text-center py-5">
                <h2 className="text-5xl font-bold py-2">Featured Jobs</h2>
                <p className="py-2">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-5 my-10">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={dataLength === jobs.length ? 'hidden' : 'text-center my-7'}>
                <button onClick={() => setDataLength(jobs.length)} className="text-base font-semibold btn bg-gradient-to-r from-[#7E90FE]   to-[#9873FF] text-white hover:from-[#9873FF] hover:to-[#7E90FE]">Show More Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;