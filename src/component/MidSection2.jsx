import React from 'react';

export default function MidSection2() {
    const items = [
        {
            id: 1,
            img: "/images/Mid1.png",
            heading: "Caterings",
            title: "In the new era of technology we look in the future with certainty for life",
        },
        {
            id: 2,
            img: "/images/Mid2.png",
            heading: "Caterings",
            title: "In the new era of technology we look in the future with certainty for life",
        },
        {
            id: 3,
            img: "/images/Mid3.png",
            heading: "Caterings",
            title: "In the new era of technology we look in the future with certainty for life",
        },
        {
            id: 4,
            img: "/images/Mid4.png",
            heading: "Caterings",
            title: "In the new era of technology we look in the future with certainty for life",
        },
    ];

    return (
        <div className="w-full px-4 md:px-10 lg:px-20 mb-20">
            <div className="text-center mb-12">
                <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#2C2F24] font-bold max-w-[570px] mx-auto my-font">
                    We also offer unique services for your events
                </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="w-full max-w-[300px] transition-transform duration-300 hover:scale-105"
                    >
                        <img src={item.img} alt={item.heading} className="rounded-2xl w-full h-auto" />
                        <div className="mt-3">
                            <h2 className="text-[#2C2F24] font-bold text-lg">{item.heading}</h2>
                            <p className="text-[#414536] text-base font-medium">{item.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
