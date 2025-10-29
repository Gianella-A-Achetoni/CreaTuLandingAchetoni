import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/navBar/NavBar'
import { BrowserRouter, Routes,Route } from 'react-router-dom'

function App() {

  return (
    <div className='app'>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Bienvenidos a mi ecommerce"/>}/>
          <Route path='/category/:category' element={<ItemListContainer greeting="Bienvenidos a mi ecommerce"/>}/>
          <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<div>Error 404</div>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
