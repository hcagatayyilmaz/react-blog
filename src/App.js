import React from 'react'
import Pages from './pages/Pages'
import Category from './components/Category'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Search from './components/Search'

const App = () => {
  return (
    <div className='list'>
      <BrowserRouter>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  )
}

export default App