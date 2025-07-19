import React from 'react';

export default function MidSection5() {
  const items = [
    {
      id: 1,
      img: "/images/Mid12.jpg",
      date: "January 3, 2023",
      title: "How to prepare the perfect French fries in an air fryer"
    },
    {
      id: 2,
      img: "/images/Mid13.jpg",
      date: "January 3, 2023",
      title: "How to prepare the perfect French fries in an air fryer"
    },
    {
      id: 3,
      img: "/images/Mid14.jpg",
      date: "January 3, 2023",
      title: "How to prepare the perfect French fries in an air fryer"
    },
    {
      id: 4,
      img: "/images/Mid15.jpg",
      date: "January 3, 2023",
      title: "How to prepare the perfect French fries in an air fryer"
    },
  ];

  return (
    <div className="w-full mt-32 px-4">
      <div className="max-w-6xl mx-auto">
        
  
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <h1 className="text-2xl font-bold text-[#2C2F24]">Our Blog & Articles</h1>
          <button className="bg-[#AD343E] text-white px-4 py-2 rounded-md mt-4 md:mt-0 hover:bg-[#912b34] transition">
            Read All Articles
          </button>
        </div>

     
        <div className="flex flex-col lg:flex-row gap-10">

          <div className="w-full lg:w-[50%] bg-[#F9F9F7] rounded-2xl shadow-lg">
            <img src="/images/Mid11.jpg" alt="Main Blog" className="w-full h-[300px] object-cover rounded-t-2xl" />
            <div className="flex flex-col gap-4 p-6">
              <p className="text-[#737865] text-sm">January 3, 2023</p>
              <p className="text-[#2C2F24] font-semibold text-lg">
                The secret tips & tricks to prepare a perfect burger & pizza for our customers
              </p>
              <p className="text-[#414536] text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente hic ratione illo velit, assumenda esse fugiat repellat harum natus at rem. Enim, totam. Cum nulla mollitia quasi harum iusto tenetur!
              </p>
            </div>
          </div>

      
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full lg:w-[50%]">
            {items.map((item) => (
              <div key={item.id} className="bg-[#F9F9F7] rounded-2xl shadow-sm overflow-hidden">
                <img src={item.img} alt="Blog Thumbnail" className="w-full h-[180px] object-cover" />
                <div className="p-4 flex flex-col gap-2">
                  <p className="text-[#737865] text-sm">{item.date}</p>
                  <p className="text-[#2C2F24] font-medium text-base">{item.title}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
