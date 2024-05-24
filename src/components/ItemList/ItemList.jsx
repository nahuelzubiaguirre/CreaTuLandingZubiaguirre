/* eslint-disable react/prop-types */
import Item from '../Item/Item'

function ItemList ({productos}) {
    return (
        <>
        {productos.map(producto => (
            <Item producto={producto} key={producto.id} />
        ))}
        </>
    )
}

export default ItemList;