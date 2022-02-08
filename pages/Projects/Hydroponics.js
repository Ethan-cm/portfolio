import Link from 'next/link'
import Head from 'next/head'

export default function Snake() {
    return (
      <main>
        
        <p>Source code is available <a href="https://github.com/Ethan-cm/Hydro">here</a> </p>

        <button type='button' className='prettybutton'>
        <h2>
          <Link href="/Projects/">
            <a>Return to projects page</a>
          </Link>
        </h2>
        </button>

      </main>
    )}