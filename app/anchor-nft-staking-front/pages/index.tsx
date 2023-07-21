import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import NavBar from '@/components/NavBar'
import { Box } from "@chakra-ui/react"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Anchor Smooth Nft Staking App</title>
      </Head>
      <Box>
        <NavBar/>
      </Box>
    </div>
  )
}
