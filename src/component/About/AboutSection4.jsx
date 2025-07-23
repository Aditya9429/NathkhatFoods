import React from 'react'

export default function AboutSection4() {
    const items = [
        {
            id: 1,
            title: "Uber",
            tit: "Eats",
             textColor: "text-red-500",
            fontSize: "text-xl",
            fontStyle: "italic",
             font : "font-bold"

        },
        {
            id: 2,
            title: "GRUBHUB",
             textColor: "text-[#F63440]",
            fontSize: "text-xl",
            fontStyle: "italic",
             font : "font-bold"


        },
        {
            id: 3,
            title: "Postmates",
             textColor: "text-[#black]",
            fontSize: "text-xl",
            fontStyle: "italic",
             font : "font-bold"


        },
        {
            id: 4,
            title: "DOORDASH",
             textColor: "text-[#00CCBC]",
            fontSize: "text-xl",
            fontStyle: "italic",
             font : "font-bold"


        },
        {
            id: 5,
            title: "Uber",
            tit: "foodpanda",
            textColor: "text-[#D70F64]",
            fontSize: "text-xl",
            fontStyle: "italic",
             font : "font-bold"

        },
        {
            id: 6,
            title: "deliveroo",
             textColor: "text-red-500",
            fontSize: "text-xl",
            fontStyle: "italic",
             font : "font-bold"


        },
        {
            id: 7,
            title: "instacart",
             textColor: "text-[#43B02A]",
            fontSize: "text-xl",
            fontStyle: "italic",
             font : "font-bold"


        },
        {
            id: 8,
            title: "JUST EAT",
             textColor: "text-[#FF3131]",
            fontSize: "text-xl",
            fontStyle: "italic",
             font : "font-bold"


        },
        {
            id: 9,
            title: "Di Di Food",
             textColor: "text-[#2C2F24]",
            fontSize: "text-xl",
            fontStyle: "italic",
            font : "font-bold"


        },
    ]
    const firsthalf = items.slice(0, 3);
    const secondhalf = items.slice(3, 6);
    const thirdhalf = items.slice(6, 9);
    return (
        <div className='w-full mt-20'>
            <div className='w-full  max-w-5xl  mx-auto px-4'>
                <div className='flex flex-col md:flex-row items-center justify-between gap-50'>
                    <div className='w-full '>
                        <h1 className='text-5xl font-bold mb-5 my-font'>You can order through apps</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet risus tempor semper.</p>
                    </div>
                    <div className='w-full max-w-3xl flex flex-col  items-center gap-4'>
                        <div className='flex items-center gap-3 '>
                            {
                                firsthalf.map((item) => (
                                    <div key={item.id} className={`px-5 py-3 lg:px-8 lg:py-3 rounded-[10px]   bg-[#F9F9F7] ${item.textColor} ${item.fontStyle} ${item.fontSize} ${item.font}`}>
                                        <p>{item.title}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='flex items-center gap-4'>
                            {
                                secondhalf.map((item) => (
                                    <div key={item.id} className={` px-5 py-3 lg:px-8 lg:py-3 bg-[#F9F9F7] rounded-[10px] ${item.textColor} ${item.fontStyle} ${item.fontSize} ${item.font}`}>
                                        <p>{item.title}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='flex items-center gap-5'>
                            {
                                thirdhalf.map((item) => (
                                    <div key={item.id} className={` px-5 py-3 lg:px-8 lg:py-3 rounded-[10px] bg-[#F9F9F7] ${item.textColor} ${item.fontStyle} ${item.fontSize} ${item.font}`}>
                                        <p>{item.title}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
