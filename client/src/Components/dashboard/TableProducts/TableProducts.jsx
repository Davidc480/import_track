import { useState, useEffect } from "react";
import productFeeList from "@/helper/productsFeeList";

export default function TableProducts() {
    const [products, setProducts] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null); // Estado temporal para el producto en edición
    const [newProduct, setNewProduct] = useState({ nameProduct: "", value: "", active: true }); // Nuevo producto con campo active

    // Cargar los productos iniciales una vez al montar el componente
    useEffect(() => {
        setProducts(productFeeList);
    }, []);

    // Función para manejar cambios en los inputs de edición
    const handleEditChange = (field, value) => {
        setEditingProduct((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    // Función para iniciar la edición de un producto
    const startEditing = (product) => {
        setEditingProduct({ ...product });
    };

    // Función para guardar los cambios en el estado de productos
    const saveChanges = (id) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === id ? { ...editingProduct } : product
            )
        );
        setEditingProduct(null); // Termina la edición
    };

    // Función para manejar cambios en los inputs del nuevo producto
    const handleNewProductChange = (field, value) => {
        setNewProduct((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    // Función para añadir el nuevo producto a la lista
    const addNewProduct = () => {
        if (newProduct.nameProduct && newProduct.value) {
            setProducts((prevProducts) => [
                ...prevProducts,
                { id: Date.now(), ...newProduct }, // Asignamos un id único basado en el tiempo
            ]);
            setNewProduct({ nameProduct: "", value: "", active: true }); // Limpiar campos después de añadir
        } else {
            alert("Por favor, completa ambos campos antes de agregar el producto.");
        }
    };

    // Función para "eliminar" un producto (cambiar active a false)
    const deleteProduct = (id) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === id ? { ...product, active: false } : product
            )
        );
    };

    return (
        <div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Valor</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {products
                        .filter((product) => product.active) // Mostrar solo productos activos
                        .map((product) => (
                            <tr key={product.id}>
                                <td>
                                    {editingProduct && editingProduct.id === product.id ? (
                                        <input
                                            type="text"
                                            value={editingProduct.nameProduct}
                                            onChange={(e) =>
                                                handleEditChange("nameProduct", e.target.value)
                                            }
                                        />
                                    ) : (
                                        product.nameProduct
                                    )}
                                </td>
                                <td>
                                    {editingProduct && editingProduct.id === product.id ? (
                                        <input
                                            type="number"
                                            value={editingProduct.value}
                                            onChange={(e) =>
                                                handleEditChange("value", e.target.value)
                                            }
                                        />
                                    ) : (
                                        product.value
                                    )}
                                </td>
                                <td>
                                    {editingProduct && editingProduct.id === product.id ? (
                                        <button onClick={() => saveChanges(product.id)}>Guardar</button>
                                    ) : (
                                        <>
                                            <button onClick={() => startEditing(product)}>Editar</button>
                                            <button onClick={() => deleteProduct(product.id)}>Eliminar</button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}

                    {/* Fila para añadir nuevo producto */}
                    <tr>
                        <td>
                            <input
                                type="text"
                                placeholder="Nuevo producto"
                                value={newProduct.nameProduct}
                                onChange={(e) =>
                                    handleNewProductChange("nameProduct", e.target.value)
                                }
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                placeholder="Valor"
                                value={newProduct.value}
                                onChange={(e) =>
                                    handleNewProductChange("value", e.target.value)
                                }
                            />
                        </td>
                        <td>
                            <button onClick={addNewProduct}>Añadir</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
