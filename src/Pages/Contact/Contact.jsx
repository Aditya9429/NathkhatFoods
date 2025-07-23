import React from 'react'

export default function Contact() {
    const item = [
        {
            id: 1,
            title: "Call us",
            main: "+1-24-570-8900"
        },
        {
            id: 2,
            title: "Hours",
            main: "Mon-Fri: 11am - 8pm Sat, Sun: 9am - 10pm"
        },
        {
            id: 3,
            title: "Our location",
            main: "123 Bridge Street Nowhere Land, LA 12345 United States"
        },
    ];

    return (
        <div className="px-4 py-10">
            <div className="max-w-4xl mx-auto flex flex-col items-center gap-10">
               
                <div className="text-center px-4">
                    <h1 className="text-[#2C2F24] text-4xl md:text-6xl lg:text-[100px] font-bold my-font">Contact Us</h1>
                    <p className="text-[#495460] text-sm md:text-base mt-4">
                        We consider all the drivers of change and give you the components you need to create real impact.
                    </p>
                </div>

             
                <div className="w-full bg-white p-6 md:p-10 rounded-2xl shadow-md">
                   
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex flex-col w-full">
                            <label className="mb-1 text-sm font-medium">Name</label>
                            <input
                                type="text"
                                placeholder="Enter your Name"
                                className="border rounded-3xl px-4 py-2 focus:ring-1 focus-within:bg-gray-50 focus:border-blue-400 outline-none  text-gray-500"
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <label className="mb-1 text-sm font-medium">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your Email"
                                className="border rounded-3xl px-4 py-2 focus:ring-1 focus-within:bg-gray-50 focus:border-blue-400 outline-none  text-gray-500"
                            />
                        </div>
                    </div>

                   
                    <div className="flex flex-col mt-6">
                        <label className="mb-1 text-sm font-medium">Subject</label>
                        <input
                            type="text"
                            placeholder="Write a subject"
                            className="border rounded-3xl px-4 py-2 focus:ring-1 focus-within:bg-gray-50 focus:border-blue-400 outline-none  text-gray-500"
                        />
                    </div>

                    
                    <div className="flex flex-col mt-6">
                        <label className="mb-1 text-sm font-medium">Message</label>
                        <textarea
                            rows="6"
                            placeholder="Type your message here..."
                            className="border rounded-md px-4 py-3 focus:ring-2 focus:ring-gray-200 outline-none"
                        ></textarea>
                    </div>

                    <button className="w-full bg-amber-900 text-white rounded-3xl py-3 mt-6 font-semibold">
                        Submit
                    </button>
                </div>

             
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10 text-center md:text-left">
                    {item.map((info, index) => (
                        <div key={index}>
                            <p className="text-[#555751] font-bold mb-2 my-font">{info.title}</p>
                            <p className="text-[#2C2F24] font-medium text-sm max-w-[200px] mx-auto md:mx-0">
                                {info.main}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
