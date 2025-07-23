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
                <div className='flex flex-col md:flex-row items-center justify-between gap-30'>
                    <div className='w-full ml-10 lg:ml='>
                        <h1 className='text-5xl font-bold mb-5 my-font'>You can order through apps</h1>
                        <p className='max-w-[300px] text-gray-600'>You can order through the app and also explore a variety of homemade and unique recipes shared by other users. Whether you're looking to try something new or order your favorite dish, our app makes it easy. </p>
                    </div>
                    <div className='w-full max-w-2xl flex flex-col  items-center gap-4'>
                        <div className='flex items-center gap-3 '>
                            {
                                firsthalf.map((item) => (
                                    <div key={item.id} className={`px-3 py-3 lg:px-8 lg:py-3 shadow-2xl  rounded-[10px]   bg-[#F9F9F7] ${item.textColor} ${item.fontStyle} ${item.fontSize} ${item.font}`}>
                                        <p>{item.title}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='flex items-center gap-4'>
                            {
                                secondhalf.map((item) => (
                                    <div key={item.id} className={` px-3 py-3 lg:px-8 lg:py-3 bg-[#F9F9F7] shadow-2xl rounded-[10px] ${item.textColor} ${item.fontStyle} ${item.fontSize} ${item.font}`}>
                                        <p>{item.title}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='flex items-center gap-5'>
                            {
                                thirdhalf.map((item) => (
                                    <div key={item.id} className={` px-3 py-3 lg:px-8 lg:py-3 rounded-[10px] shadow-2xl bg-[#F9F9F7] ${item.textColor} ${item.fontStyle} ${item.fontSize} ${item.font}`}>
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
