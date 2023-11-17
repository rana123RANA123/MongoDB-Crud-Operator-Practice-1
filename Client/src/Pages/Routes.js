import React from 'react'
import '../App.scss'
import { Routes, Route } from 'react-router-dom'
import Show from './Frontend/Show'
import Upload from './Frontend/Upload'

// import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Edit from './Frontend/Upload/Edit'

export default function Index() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Show />} />
          <Route path='/upload' element={<Upload />} />
          <Route path='/edit/:id' element={<Edit />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </>
  )
}
