import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Portrait from '../public/Portrait_scaled.png'
import styled, {css} from "styled-components"


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Ethan CM Portfolio</title>
        <link rel="icon" href="/tom.jpg" />
      </Head>

    <div className="Portrait">
    
    </div>
      <main>
        <h1 className="Name">
            Ethan Cinq-Mars
        </h1>

        <p className='header'>
          Electrical Engineer with skills ranging from frontend development to Power engineering
        </p>

        <h3>
        <Image
        src={Portrait}
        alt="picture of a big fool"
        layout = "intrinsic"
        width={400}
        height={600}
        />
        </h3>

        <h2 className="Divbox">
            <Link href="/Projects">
              <a> Projects </a>
            </Link>
        </h2>

        <h2 className='Divbox'>
          <Link href= "/Frontend">
            <a>Front End development</a>
          </Link>
        </h2>

        <h2 className="Divbox">
            <Link href="/Education">
           <a>Education</a>
           </Link>
        </h2>

        <h2 className="Divbox">
            <Link href="/Work">
           <a>Work Experience</a>
           </Link>
        </h2>

        <Button primary>test</Button>



      </main>
  </div>
  )}
      
const Button = styled.button`
background: teal;
border-radius: 10px;
border: 2px solid palevioletred;
color: aquamarine;
margin: 0 1em;
padding: 0.25em 1em;

${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`