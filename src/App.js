import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:8081/api/products'); // Back-end API URL
                setProducts(response.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des produits', error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Liste des Produits</h1>
            <ul className="list-group">
                {products.map(product => (
                    <li key={product.id} className="list-group-item">
                        <div className="d-flex justify-content-between">
                            <div>
                                <h5>{product.name}</h5>
                                <p className="mb-1">Prix: {product.price} €</p>
                                <p className="mb-1">Quantité: {product.quantity}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;


