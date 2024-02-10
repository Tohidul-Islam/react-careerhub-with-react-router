import { Link, useLoaderData, useParams } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { saveJobApplication } from "../../utilities/LocalStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { JobDetailsId } = useParams();
    const detailsId = parseInt(JobDetailsId);
    const job = jobs.find(job => job.id === detailsId);


    const handleAppliedJob = () => {
        saveJobApplication(detailsId)
        toast.success('You have applied successfully')
    }

    return (
        <div>
            {/* Cover Area */}
            <div className="hero  py-20 bg-blue-100">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Job Details</h1>
                    </div>
                </div>
            </div>
            {/* Main Area */}
            <div className="max-w-6xl mx-auto" >
                <div className="md:grid grid-cols-3 gap-5 my-5 px-5">
                    {/* Left Information */}
                    <div className="col-span-2 ">
                        <h2 className="py-4 text-gray-500"><b className="text-black">Job Descriptions: </b> {job.job_description}</h2>
                        <h2 className="py-4 text-gray-500"><b className="text-black">Job Responsibility: </b> {job.job_responsibility}</h2>
                        <h2 className="py-4 text-gray-500"><b className="text-black">Educational Requirements: </b> {job.educational_requirements}</h2>
                        <h2 className="py-4 text-gray-500"><b className="text-black">Experiences: </b> {job.experiences}</h2>
                    </div>
                    {/* Right Sidebar Information */}
                    <div>
                        <div className="bg-blue-100 p-5 rounded-md">
                            <h2 className="text-2xl font-bold pb-2 mb-2 border-b-2 border-blue-200">Job Details:</h2>

                            <div className="flex items-center py-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-500 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>


                                <h2 className=" text-gray-600"><b className="text-black">Salary: </b> {job.salary}</h2>
                            </div>
                            <div className="flex items-center py-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-500 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                                </svg>

                                <h2 className=" text-gray-600"><b className="text-black">Job Title: </b> {job.job_title}</h2>
                            </div>
                            <h2 className="text-2xl font-bold pb-2 mt-5 mb-2 border-b-2 border-blue-200">Contact Information:</h2>
                            <div className="flex items-center py-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-500 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>

                                <h2 className=" text-gray-600"><b className="text-black">Phone: </b> {job.contact_information.phone}</h2>
                            </div>
                            <div className="flex items-center py-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-500 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>


                                <h2 className=" text-gray-600"><b className="text-black">Email: </b> {job.contact_information.email}</h2>
                            </div>
                            <div className="flex  py-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-500 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>


                                <h2 className=" text-gray-600"><b className="text-black">Address: </b> {job.contact_information.address}</h2>
                            </div>
                        </div>
                        <Link>
                            <button onClick={() => handleAppliedJob()} className="text-base font-semibold btn bg-gradient-to-r from-[#7E90FE]   to-[#9873FF] text-white hover:from-[#9873FF] hover:to-[#7E90FE] w-full my-5">Apply Now</button>
                        </Link>
                    </div>
                </div >
                <Toaster />
            </div >
        </div>
    );
};

export default JobDetails;