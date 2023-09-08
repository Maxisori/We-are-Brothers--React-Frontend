import React, { useState } from 'react';

function Cart() {
    const [items, setItems] = useState([]);

    const addItem = () => {
        const newItem = `Ítem ${items.length + 1}`;
        setItems([...items, newItem]);
    };

    const deleteItem = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    };

    const deleteAllItems = () => {
        setItems([]);
    };

    const goToPayment = () => {
        // acá va la lógica para ir a la página de pago
        alert('Ir a la página de pago');
    };

    return (
        <div>
            <h1>Carrito de Compras</h1>
            <div>
                <button onClick={addItem}>Agregar Ítem</button>
                <button onClick={deleteAllItems}>Eliminar Todo</button>
                <button onClick={goToPayment}>Ir a Pagar</button>
            </div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => deleteItem(index)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}



export default Cart;