import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Portrait from '../public/Portrait_scaled.png';
import styled, {css} from "styled-components";
import {Indexgrid, Nav, GridA, GridB, GridC, GridD, Main, Bottom} from '../components/grid/grid.js'


export default function Home() {
  return (
    <Indexgrid>
      <Head>
        <title>Ethan CM Portfolio</title>
        <link rel="icon" href="/tom.jpg" />
      </Head>

        <Nav>NAVIGATION</Nav>

        <Main>
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
        </Main>

        <GridA>
          <h2>
              <Link href="/Projects">
                <a> Projects </a>
              </Link>
          </h2>
        </GridA>

        <GridB>
        <h2>
          <Link href= "/Frontend">
            <a>Front End development</a>
          </Link>
        </h2>
        </GridB>

        <GridC>
        <h2>
            <Link href="/Education">
           <a>Education</a>
           </Link>
        </h2>
        </GridC>

        <GridD>
        <h2>
            <Link href="/Work">
           <a>Work Experience</a>
           </Link>
        </h2>
        </GridD>

        <Bottom>
          <Link href="/practice">
            <a>practice</a>
          </Link>
        </Bottom>
  
      
  </Indexgrid>
  )}
      
