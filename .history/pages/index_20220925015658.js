import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header/Header'

export default function Home() {
  return (
    <div className={styles.container}>
     <Header/>
    </div>
  )
}
