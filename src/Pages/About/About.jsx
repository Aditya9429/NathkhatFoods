import React from 'react'

export default function About() {
  return (
    <div className='w-full  mt-10 p-5'>
      <div className='flex flex-col items-center max-w-[800px] mx-auto gap-5'>
        <div className='mb-10'>
        <h1 className='text-4xl my-font font-extrabold'>Welcome to the NathKhat foodS</h1>
        </div>
        <div className='flex flex-col gap-3'>
            <h1 className='text-2xl font-bold'>About</h1>
            <p className='font-light text-[29px]'>Pepper is a community of 1 million home cooks from all backgrounds & skill sets sharing & discovering </p>
            <p className='font-light text-[29px]'>Pepper empowers you to share your favorite meals; create digital social cookbooks; seamlessly view standardized recipes; and search the community of 50,000+ recipes for dishes based on ingredients, dietary restrictions, difficulty, and more.</p>
        </div>
        <div className='flex flex-col gap-3'>
            <h1 className='text-2xl font-bold'>Our STORY</h1>
             <p className='font-light text-[29px]'>Childhood friends Jake Aronskind & Matt Schkolnick created Pepper after being inspired by a group chat they were in with college friends sharing what they were cooking.</p>
             <p className='font-light text-[29px]'>Our passion for cooking started by seeing familiar dishes, and sought to create an online community for home cooks to engage and learn from each other. We’ve now spent the last 3 years building a grassroots community into one of the leading online communities for home cooks.</p>
        </div>
      </div>
    </div>
  )
}
