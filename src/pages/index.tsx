// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import Profile from './components/profile'
import Gallery from './qcomps/gallery_props'
import List from './qcomps/list_keys_id'
import RecipeList from './qcomps/recipes'

export default function Home() {
  return (
    <>
      <h1>Part 1 - Gallery Props:</h1>
      <Gallery /> <br></br>
      <h1>Part 2 - List Keys Id:</h1>
      <List />
      <h1>Part 3 - Recipes:</h1>
      <RecipeList />
    </> 
  )
}
