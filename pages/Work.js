 
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import Image from 'next/image'
import { pdfjs } from 'react-pdf'
import PDFViewer from '../components/pdf-viewer'



export default function Work() {
  return (
    <>
      <Head>
        <title>Work landing page</title>
        <link rel="icon" href="/tom.jpg" />
      </Head>
      <h1>Work Page</h1>

      <div className='pdfcontainer'>

      <PDFViewer/>

      <button type='button' className='downloadbutton'>
        <Link href= "/"> 
          <a>Download a Copy of this resume</a>
        </Link>
      </button>

      </div>
      
      <button type='button' className='prettybutton'>
        <h2>
          <Link href="/">
            <a>Return to main page</a>
          </Link>
        </h2>
      </button>


    </>

  )
}

