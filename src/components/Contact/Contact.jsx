import { Form } from "react-router-dom";

const Contact = () => {
    return (
        <div>
            {/* Cover Area */}
            <div className="hero  py-20 bg-blue-100">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Contact Us</h1>
                    </div>
                </div>
            </div>
            {/* Form */}
            <div>
                <Form className="max-w-96 mx-auto my-10">
                    <input type="text" name="name" placeholder="Enter Your Full Name" id="" className="text-lg  border-2 border-black rounded-lg px-4 py-2 my-1 w-full text-gray-500" /> <br></br>
                    <input type="email" name="email" placeholder="Your Email Address" id="" className="text-lg border-2 border-black rounded-lg px-4 py-2 my-1 w-full text-gray-500" /> <br></br>
                    <input type="tel" name="phone" placeholder="Phone Number" id="" className="text-lg  border-2 border-black rounded-lg px-4 py-2 my-1 w-full text-gray-500" /> <br></br>
                    <input type="submit" value="Send Message" className="my-1 px-4 py-3 bg-blue-500 border-blue-500 w-full rounded-lg text-white font-bold text-lg cursor-pointer" />


                </Form>
            </div>
        </div>
    );
};

export default Contact;