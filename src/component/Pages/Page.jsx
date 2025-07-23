import React from 'react'

export default function Page() {
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
        <div className='w-full mt-10 px-4 lg:px-0'>
            <div className='w-full max-w-7xl mx-auto'>
                <div className=' w-full flex flex-col items-center gap-10 mx-auto my-font'>
                    <h1 className='text-4xl font-bold max-w-3xl text-center'>The secret tips & tricks to prepare a perfect burger & pizza for our customers</h1>
                    <img src="images/Page.jpg" className='w-full max-w-xl rounded-2xl object-cover'/>
                </div>
                <div className='mt-10'>
                    <div className='flex flex-col gap-8'>
                        <h1 className='text-2xl text-[#2C2F24]  font-bold '>What do you need to prepare a home-made burger?</h1>
                        <p className='text-[13px] lg:text-[17px] text-[#5a5c58] font-light leading-7 lg:leading-8'>Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, we'll unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world.


                            Quality Beef: The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.
                            Seasoning: Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beef's natural flavors without overshadowing them.
                            Don’t Overwork the Meat: When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty that's firm enough to hold together, but not compressed.
                            Cooking: High heat is crucial. Whether you're grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.
                            Resting: Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite..</p>

                    </div>
                    <div className=' flex flex-col gap-8 mt-10'>
                        <h1 className='mb-5 text-2xl text-[#2C2F24]  font-bold '>What are the right ingredients to make it delicious?</h1>
                        <p className='text-[13px] lg:text-[17px] text-[#5a5c58] font-light leading-7 lg:leading-8'>Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, we'll unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world.

                            Quality Beef: The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.
                            Seasoning: Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beef's natural flavors without overshadowing them.
                            Don’t Overwork the Meat: When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty that's firm enough to hold together, but not compressed.
                            Cooking: High heat is crucial. Whether you're grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.
                            Resting: Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.</p>
                    </div>
                    <div className='mt-10 mx-auto'>
                        <img src="/images/Page1.jpg" className='rounded-2xl '/>
                    </div>
                    <div className='mt-10 ml-5'>
                        <h1 className='mb-5 text-2xl text-[#2C2F24]  font-bold'>What are the right ingredients to make it delicious?</h1>
                        <p className='text-[13px] lg:text-[17px] text-[#5a5c58] font-light leading-7 lg:leading-8'>Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra egestas nisi in consequat. Fusce sodales augue a accumsa Cras sollicitudin, le ligula, porttitor eu, consequat vitae, eleifend ac, enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit viverra sit semper lorem eu cursus ve of all hendrerit elementum morbi curabitur etiam nibh justo, lorem aliquet donec sed sit mi dignissim at ante massa mattis magna sit amet purus gravida quis blandit turpis..</p>
                    </div>
                    <div className='flex flex-col items-center gap-10 mt-40'>
                        <div className='text-center max-w-[700px] '>
                        <h1 className='text-5xl mb-4'>Read More Articles</h1>
                        <p>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
                       </div>
                        <div className='grid grid-cols-1 md:grid-cols-4 items-center gap-10 m-4'>
                            {
                                items.map((item, index) => (
                                    <div key={index} className='bg-[#F9F9F7] rounded-2xl shadow-sm overflow-hidden hover:scale-112 transition-transform duration-300'>
                                        <img src={item.img} className='w-full h-[170px] object-cover ' />
                                        <div className='mt-5 p-4'>
                                        <p className='text-[#737865] text-sm'>{item.date}</p>
                                        <p className='text-[#2C2F24] font-medium text-base'>{item.title}</p>
                                        </div>
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
