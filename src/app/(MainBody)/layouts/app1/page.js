"use client"
import React, { useEffect } from 'react'
import Head from 'next/head'
// import Custom Components
import Header from '../../../../containers/common/header'
import BannerSection from '../../../../containers/layouts/sections/index/banner'
import ServicesSection from '../../../../containers/layouts/sections/index/services'
import AboutSection from '../../../../containers/layouts/sections/index/about'
import DownloadSection from '../../../../containers/layouts/sections/index/download'
import ScreenShotsSection from '../../../../containers/layouts/sections/index/screenshots'
import PriceSection from '../../../../containers/layouts/sections/index/price'
import VideoSection from '../../../../containers/layouts/sections/index/video'
import FooterSection from '../../../../containers/layouts/sections/index/footer'


const App1 = () => {

  useEffect(() => {
    document.body.style.setProperty('--primary', '#357fef')
    document.body.style.setProperty('--secondary', '#4e4e4e')
    document.body.style.setProperty('--light', '#13B8EA')
    document.body.style.setProperty('--dark', '#4E56F3')
  })

  return (
    <div>
      <Head>
        <title>Unice</title>
      </Head>

      <Header className="app1" />

      <BannerSection />

      <ServicesSection />

      <AboutSection />

      <DownloadSection />

      <ScreenShotsSection />

      <PriceSection />

      <VideoSection />

      <FooterSection />

    </div>
  )
}

export default App1
