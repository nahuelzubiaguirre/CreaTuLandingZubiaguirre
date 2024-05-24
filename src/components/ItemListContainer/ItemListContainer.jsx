import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import ItemList from '../ItemList/ItemList'
import {useState, useEffect} from 'react' 
import { useParams } from 'react-router-dom'

function ItemListContainer () {
    const [items,setItems] = useState ([])

    const { categoryId } = useParams()

    useEffect (() => {
        fetch(`https://dummyjson.com/products/category/${categoryId}`)
            .then(res => res.json())
            .then(data => setItems(data.products));
    
    }, [categoryId])

    return (
        <Container fluid>
            <Row>
                <ItemList productos={items} />
            </Row>
        </Container>
    )
}

export default ItemListContainer;