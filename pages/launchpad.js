import Launchpad from '../components/esummit/Launchpad'
import Head from 'next/head'
import Cards from '../components/esummit/Launchpad_cards'
import SummitEvents from '../components/esummit/events_esummit'
import Carousel from '../components/esummit/carousel'
import { carouselData } from '../components/esummit/carouselData'
import { useEffect } from 'react'
export default function Esummit({ setrender }) {
  useEffect(() => {
    window.location.href = 'https://launchpad23.vercel.app/'
  }, [])
  return (
    <>
      <Head>
        <title>Launchpad | E-Cell BPHC </title>
      </Head>
      Please wait, we are taking you to the Launchpad!
      {/* <Launchpad prop={setrender} />
      <Cards /> */}
      {/* <SummitEvents/> */}
    </>
  )
}
