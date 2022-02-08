import Link from 'next/link'
import Head from 'next/head'
 
export default function Amplifier() {
    return (
        <main>

        <button type='button' className='prettybutton'>
        <h2>
          <Link href="/Projects/">
            <a>Return to projects page</a>
          </Link>
        </h2>
        </button>

        </main>
    )}