import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/navbar'
import Cover from '../components/cover'

export default function Home() {
  return(

    <div>
      <Header />
      <Cover />
    </div>
  )
}
