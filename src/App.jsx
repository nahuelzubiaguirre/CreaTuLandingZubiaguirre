import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from "./components/ItemCount/ItemCount";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div calssName ="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/category/:categoryId' element={ItemListContainer />} />
        <Route path='/item/:itemId' element={ <ItemDetailContainer />} />
        <Route path='*' element={<h1>404 NOT FOUND</h1>} /> 
      </Routes>
      </BrowserRouter>
     // <ItemListContainer greeting={'Bienvenidos'}/>
      //<ItemCount initial={1} stock={10} onAdd={(quantity) => console.log ('Cantidad agregada', quantity)} />
      //<ItemDetailContainer />
    </div>
  )
}

export default App
