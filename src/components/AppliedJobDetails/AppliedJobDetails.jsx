import { Link } from "react-router-dom";

const AppliedJobDetails = ({ appliedJob }) => {
    const { id, company_name, logo, job_title, job_type, location, salary, remote_or_onsite } = appliedJob;
    return (
        <div>
            <div className="flex justify-between border-2 border-gray-300 rounded-md p-5 m-5 items-center max-w-6xl mx-auto">
                {/* left side */}
                <div className="flex items-center">
                    {/* logo */}
                    <div className="bg-gray-100 py-20 px-8 mr-5 rounded-md">
                        <figure className="max-w-48 px-5 mt-5"><img className="w-full" src={logo} alt="Company_Img" /></figure>
                    </div>
                    {/* Information about Jobs */}
                    <div>
                        <h2 className="card-title font-bold text-2xl">{job_title}</h2>
                        <p className="text-lg font-semibold text-gray-500">{company_name}</p>
                        <div className="mt-2">
                            <button className="border rounded  border-[#7E90FE] px-4 py-2 mr-2 font-semibold text-[#7E90FE] text-base">{remote_or_onsite}</button>
                            <button className="border rounded border-[#7E90FE] px-4 py-2 mr-2 font-semibold text-[#7E90FE] text-base">{job_type}</button>
                        </div>
                        <div className="flex justify-normal my-5">

                            <div className="flex mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>

                                <p className="text-gray-500 font-semibold text-base mr-2">{location}</p>
                            </div>

                            <div className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>

                                <p className="text-gray-500 font-semibold text-base mr-2">Salary: {salary}</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right side */}
                <div>
                    <Link to={`/job/${id}`}>
                        <button className="text-base font-semibold btn bg-gradient-to-r from-[#7E90FE]   to-[#9873FF] text-white hover:from-[#9873FF] hover:to-[#7E90FE]">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AppliedJobDetails;