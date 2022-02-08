 
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import Image from 'next/image'

export default function Education() {
  return (
    <div>
      <Head>
        <title>Education landing page</title>
        <link rel="icon" href="/tom.jpg" />
      </Head>
      <h1>Education</h1>

      <div className='University Box'>
        <p> I graduated from the University of Alberta with a Bachelor's Degree in Electrical Engineering. </p>
        <p> Since then I have been developing my skills further, as seen in my <Link href="./Projects"> Projects page</Link> </p>
      </div>

      <button type='button' className='prettybutton'>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      </button>
    </div>


)
}