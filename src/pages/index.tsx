// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import Profile from './components/profile'
import BucketList from './qcomps/arrObj'
import List from './qcomps/artistsRemoveArr'
import Gallery from './qcomps/state'
// import List from './qcomps/list_keys_id'
import RecipeList from './qcomps/recipes'
import RequestTracker from './qcomps/shoppingCart'
import Form from './qcomps/stuckForm'
import Scoreboard from './qcomps/updObjectsForm'

export default function Home() {
  return (
    <>
      {/* <h1>Part 1 - Gallery Props:</h1>
      <Gallery /> <br></br>
      <h1>Part 2 - List Keys Id:</h1>
      <List />
      <h1>Part 3 - Recipes:</h1>
      <RecipeList /> */}

      {/* <RequestTracker/> */}
      {/* <Scoreboard/> */}
      {/* <List/> */}
      {/* <BucketList/> */}
      
      <h1>Part 1 - Sculptors State</h1>
      <Gallery/> <br/><br/>
      <h1>Part 2 - Stuck Form</h1>
      <Form/> <br/><br/>
      <h1>Part 3 - Shopping Car</h1>
      <RequestTracker/> <br/><br/>
      <h1>Part 4 - Score Increment</h1>
      <Scoreboard/> <br/><br/>
      <h1>Part 5 - Isolated Lists</h1>
      <BucketList/> <br/><br/>
      <h1>Part 6 - Remove Artists</h1>
      <List/> <br/><br/>
    </> 
  )
}
