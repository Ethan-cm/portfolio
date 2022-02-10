import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import Image from 'next/image'
import praccomp from '../'

export default function frontend() {
  return (
    <div>
      <Head>
        <title>frontend landing page</title>
        <link rel="icon" href="/tom.jpg" />
      </Head>
      <h1>Frontend page</h1>

      <h1>Frontend skills:</h1>

      <p>I have experience with the following frameworks and tools:</p>

      <div className='toolboxes'>
       
       <div className='Djangobox'>
         <p>Django</p>
       </div>
     
       <div className='Reactbox'>
         <p>React</p>
       </div>

       <div className='Node.js'>
         <p>Node.js</p>
       </div>

       <div className='HTML5'>
         <p>HTML5</p>
       </div>

       <div className='NPM'>
         <p>NPM</p>
       </div>

       <div className='Babel'>
         <p>Babel</p>
       </div>

     </div>

      <p>This website has been built entirely by myself using React, Node.js and Next.js</p>

      <p>If you want to see some example code, a github link to the source code for this website
        is   </p>
      
      

      <button type='button'>
        <h2>
          <Link href="/">
            <a>Return to main page</a>
          </Link>
        </h2>
      </button>

    </div>

  )
}

