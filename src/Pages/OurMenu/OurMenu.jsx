import React from 'react'
import AboutSection1 from '../../component/About/AboutSection1'
import AboutSection2 from '../../component/About/AboutSection2'
import AboutSection3 from '../../component/About/AboutSection3'
import MidSection4 from '../../component/MidSection4'

export default function OurMenu() {
  return (
    <div>
      <AboutSection1 />
      <AboutSection2 />
      <AboutSection3 />
      <MidSection4 className="mt-20" />
    </div>
  )
}
