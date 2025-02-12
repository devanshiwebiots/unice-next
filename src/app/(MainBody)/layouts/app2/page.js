"use client"
import Head from 'next/head'
import React, { useEffect } from 'react'
// import Custom Components
import AboutSection from '../../../../containers/layouts/sections/app/about'
import BannerSection from '../../../../containers/layouts/sections/app/banner'
import ClientSection from '../../../../containers/layouts/sections/app/client'
import CopyrightSection from '../../../../containers/layouts/sections/app/copyright'
import FooterSection from '../../../../containers/layouts/sections/app/footer'
import FormatSection from '../../../../containers/layouts/sections/app/format'
import MemberSection from '../../../../containers/layouts/sections/app/member'
import PricingSection from '../../../../containers/layouts/sections/app/pricing'
import ScreenshotSection from '../../../../containers/layouts/sections/app/screenshot'
import ServicesSection from '../../../../containers/layouts/sections/app/services'
import TeamSection from '../../../../containers/layouts/sections/app/team'
import Header from '../../../../containers/common/header'


const App2 = () => {

  useEffect(() => {
    document.body.style.setProperty('--primary', '#fd6d64')
    document.body.style.setProperty('--secondary', '#434345')
    document.body.style.setProperty('--light', '#F66E54')
    document.body.style.setProperty('--dark', '#FF534B')
  })

  return (
      <div className="theme-color" >
        <Head>
          <title>App Layout</title>
        </Head>

        <Header />

        <BannerSection />

        <AboutSection />

        <ServicesSection />

        <FormatSection />

        <TeamSection /> 

        <ScreenshotSection />

        <MemberSection />

        <PricingSection />
      
        <ClientSection />

        <FooterSection />

        <CopyrightSection />

        {/* Tap on Top */}
        <div className="tap-top">
            <div><i className="fa fa-angle-double-up"></i></div>
        </div>
        {/* Tap on Ends */}
        
      </div>
  )
}

export default App2
