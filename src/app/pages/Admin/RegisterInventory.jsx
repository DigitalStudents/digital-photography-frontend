import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Dropdown from "react-bootstrap/Dropdown";

const inventoryEndpoint = `${import.meta.env.VITE_BACKEND_URL}inventory/`;
const productsEndpoint = `${import.meta.env.VITE_BACKEND_URL}productos`;

const RegisterInventory = () => {
    const [inventoryForm, setInventoryForm] = useState({ producto: "", cantidad: 0 });
    const [enableSubmit, setEnableSubmit] = useState(false);
    const [productos, setProductos] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const fetchInventory = (productId) => {
        fetch(`${inventoryEndpoint}${productId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data);
                setInventoryForm({ ...inventoryForm, cantidad: data });
            })
            .catch((err) => console.error(err));
    };

    const updateProducto = (product) => {
        setSelectedProduct(product);
        fetchInventory(product.id);
    };

    const handleChangeCantidad = (e) => {
        setInventoryForm({ ...inventoryForm, cantidad: e.target.value });
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if (!selectedProduct) {
            Swal.fire("Error", "Seleccione un producto", "error");
            return;
        }

        const p1 = fetch(inventoryEndpoint + selectedProduct.id, {
            method: "POST",
            body: JSON.stringify({
                initialStock: inventoryForm.cantidad,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        
        const p2 = fetch(inventoryEndpoint + selectedProduct.id + "?newStock=" + inventoryForm.cantidad, {
                method: "PUT",
                body: JSON.stringify({
                    newStock: inventoryForm.cantidad,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            
        Promise.all([p1, p2]).finally(()=>{
                Swal.fire("Inventario guardado con éxito!", "", "success");
        })
        
        
    };

    useEffect(() => {
        fetch(productsEndpoint, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setProductos(data);
            })
            .catch((err) => console.error(err));
    }, []);

    useEffect(() => {
        const validityFields = selectedProduct && inventoryForm.cantidad >= 0;
        setEnableSubmit(validityFields);
    }, [inventoryForm, selectedProduct]);

    return (
        <section className="card-container">
            <h2>Actualiza el Inventario</h2>
            <form onSubmit={handleSubmitForm}>
                <label>Producto: </label>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {selectedProduct ? selectedProduct.nombre : "Seleccione un producto"}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {productos.map((product, idx) => (
                            <Dropdown.Item key={idx} onClick={() => updateProducto(product)}>
                                {product.nombre}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
                <label>Cantidad: </label>
                <input
                    id="cantidad"
                    type="number"
                    className="form-control"
                    onChange={handleChangeCantidad}
                    value={inventoryForm.cantidad}
                />
                <button
                    type="submit"
                    style={{ marginTop: "40px" }}
                    className="btn btn-primary btn-lg"
                    disabled={!enableSubmit}
                >
                    Guardar
                </button>
            </form>
        </section>
    );
};

export default RegisterInventory;
