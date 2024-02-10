import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utilities/LocalStorage";
import AppliedJobDetails from "../AppliedJobDetails/AppliedJobDetails";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    // for filtering jobs function
    const [displayJobs, setDisplayJobs] = useState([]);
    const handleFilterJobs = (filterText) => {
        if (filterText === 'All') {
            setDisplayJobs(appliedJobs);
        }
        else if (filterText === 'Remote') {
            const remoteJobs = appliedJobs.filter(jobs => jobs.remote_or_onsite === filterText);
            setDisplayJobs(remoteJobs)
        }
        else if (filterText === 'Onsite') {
            const onsiteJobs = appliedJobs.filter(jobs => jobs.remote_or_onsite === filterText);
            setDisplayJobs(onsiteJobs);
        }
    }
    useEffect(() => {
        const storedJobsIds = getStoredJobApplication();
        if (jobs.length > 0) {
            // one way
            // const jobApplied = jobs.filter(job => storedJobsIds.includes(job.id));

            // another way
            const jobApplied = [];
            for (const id of storedJobsIds) {
                const job = jobs.find(jobId => jobId.id === id);
                jobApplied.push(job);
            }
            console.log('Hello', jobApplied);
            setAppliedJobs(jobApplied);
            setDisplayJobs(appliedJobs);
        }
    }, [jobs])
    return (
        <div>
            {/* Cover Area */}
            <div className="hero  py-20 bg-blue-100">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Applied Jobs: {appliedJobs.length}</h1>
                    </div>
                </div>
            </div>
            {/* Filter area */}
            <div>
                <div className="w-72 ml-auto mt-5">
                    <details className="dropdown">
                        <summary className="m-1 btn bg-blue-700 text-white hover:bg-blue-500">Filter Jobs</summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-blue-100 rounded-box w-52 ">
                            <li onClick={() => handleFilterJobs('All')}><a>All</a></li>
                            <li onClick={() => handleFilterJobs('Remote')}><a>Remote</a></li>
                            <li onClick={() => handleFilterJobs('Onsite')}><a>Onsite</a></li>

                        </ul>
                    </details>
                </div>
            </div>
            {/* applied Jobs */}
            <div>
                {
                    displayJobs.map(appliedJob => <AppliedJobDetails
                        key={appliedJob.id}
                        appliedJob={appliedJob}
                    ></AppliedJobDetails>)
                }

            </div>
        </div>
    );
};

export default AppliedJobs;