import React from 'react'
import Home from './components.jsx/Home'
import Posts from './components.jsx/Posts'
import Navbar from './components.jsx/Navbar'

function App() {
  return (
    <div className='w-full min-h-screen bg-gray-100'>
      <main>
        {/* <Navbar/> */}
        <Home/>
        <Posts/>
      </main>
    </div>
  )
}

export default App
