import img from '../../assets/images/user.png'
const HomeBanner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className=" max-w-6xl mx-auto  flex justify-center items-center p-0 flex-col lg:flex-row-reverse">

                    <img src={img} />

                    <div>
                        <h1 className="text-5xl font-bold text-black py-1">One Step</h1>
                        <h1 className="text-5xl font-bold text-black py-1"> Closer To Your</h1>
                        <b className="text-6xl font-bold text-[#9873FF] py-1">Dream Job</b>
                        <p className="py-6 text-base text-gray-900">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className="text-base font-semibold btn bg-gradient-to-r from-[#7E90FE]   to-[#9873FF] text-white hover:from-[#9873FF] hover:to-[#7E90FE]">Get Started</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default HomeBanner;