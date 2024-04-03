import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div calssName ="App">
      <NavBar />
      <ItemListContainer greeting={'Pagina en desarrollo'}/>
    </div>
  )
}

export default App
