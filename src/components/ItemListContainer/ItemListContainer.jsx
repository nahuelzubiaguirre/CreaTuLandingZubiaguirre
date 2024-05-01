import { useState, useEffect } from "react"
// ximport { getProducts} from ''
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState ([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response =>{
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId] )

 //   useEffect(() => {
   //     getProducts()
     //   .then(response =>{
       //     setProducts(response)
        //})
       // .catch(error => {
        //    console.error(error)
        //})
    //}, [])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer