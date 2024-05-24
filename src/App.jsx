import './App.css'
import NavBar  from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App () {
    return (
        <BrowserRouter>
            <NavBar />
            <p>Bienvenidos</p>
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:categoryId' element={<ItemListContainer />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;