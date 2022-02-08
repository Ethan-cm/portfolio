import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import Image from 'next/image'

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Project landing page</title>
        <link rel="icon" href="/tom.jpg" />
      </Head>

      <h1>Projects</h1>


    <div className='Projectbox'>
        <h2>
        <Link href="../Projects/Hydroponics">
          <a> Hydroponics </a>
        </Link>
        </h2>
        <p> Autonomous hydroponics garden with an RTOS environment controller</p>
    </div>


    <div className='Projectbox'>
        <h2>
        <Link href="../Projects/Turntable">
          <a> Turntable </a>
        </Link>
        </h2>
        <p> A python program designed to take audio files and convert them into a 3d printable
           file</p>
    </div>

    <div className='Projectbox'>
        <h2>
        <Link href="../Projects/Snake">
          <a> Snek </a>
        </Link>
        </h2>
        <p> An simple Snake game rendered using OpenGL</p>
    </div>

    <div className='Projectbox'>
        <h2>
        <Link href="../Projects/Amplifier">
          <a> Audio amplifier </a>
        </Link>
        </h2>
        <p> Designed a 5 Volt audio amplifier with noise supression and variable gain</p>
    </div>

    <button type='button' className='prettybutton'>
      <h2>
        <Link href="/">
          <a>Return to main page</a>
        </Link>
      </h2>
    </button>
    
    </div>

  )
}
