import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Banner from './components/Banner/Banner'
import RowList from './components/Rows/RowList/RowList'

function App() {

  return (
    <>
<Header/>
<Banner/>
<RowList/>
<Footer/>

    </>
  )
}

export default App
