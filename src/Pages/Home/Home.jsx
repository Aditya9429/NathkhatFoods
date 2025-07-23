import React from 'react'
import Image from '../../component/Image'
import Browser from '../../component/Browser'
import MidSection1 from '../../component/MidSection1'
import MidSection2 from '../../component/MidSection2'
import MidSection3 from '../../component/MidSection3'
import MidSection4 from '../../component/MidSection4'
import MidSection5 from '../../component/MidSection5'
import Details from '../../component/Details'

export default function Home() {
  return (
    <div className='w-full h-full'>
   <Image />
   <Browser />
   <MidSection1/>
   <MidSection2 />
   <MidSection3 />
   <Details />
   <MidSection4 />
   <MidSection5 />
    </div>
  )
}
