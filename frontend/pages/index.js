'use client'

import { Button, ButtonGroup } from '@chakra-ui/react'
import {NextUIProvider} from '@nextui-org/react';
import { Image } from '@chakra-ui/react'
import Head from 'next/head'
import styles from '../styles/Home.module.css';
import { Box } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import { Dropdown } from "@nextui-org/react";



export default function Home() {
  return (
    <div className={styles.container}>
      <main>

        <h1 className={styles.title}>
          Husky Classroom Finder App
        </h1>

        <Button w = "100px" mt = {5} mb = {5} background = '#684f87' size = 'lg'>
          <a href = "/posts/info">
            Info
          </a>
        </Button>
       

        <div className={styles.grid}>
          <a className={styles.card}>
            <form action="/send-data-here" method="post" className = {styles.form} >
              <label for="first"> Building 1: </label>
              <input className = {styles.formbox} type="text" id="first" name="first" />
            </form>
            <form action="/send-data-here" method="post" className = {styles.form}>
              <label for="second">Classroom #: </label>
              <input className = {styles.formboxsmall} type="text" id="second" name="second" />
            </form>
          </a>
        </div>

        <div className={styles.grid}>
          <a className={styles.card}>
          <form action="/send-data-here" method="post" className = {styles.form}>
              <label for="second">Building 2: </label>
              <input className = {styles.formbox} type="text" id="second" name="second" />
            </form>
            <form action="/send-data-here" method="post" className = {styles.form}>
              <label for="second">Classroom #: </label>
              <input className = {styles.formboxsmall} type="text" id="second" name="second" />
            </form>
          </a>
          
        </div>      
       
      </main>

      <footer>
        <a
          className={styles.footer}
        >
          Husky Coding Project 2023
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}