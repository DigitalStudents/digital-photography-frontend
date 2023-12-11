import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import Dropdown from "react-bootstrap/Dropdown";
import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

initializeApp(firebaseConfig);

const categorysEndpoint = `${import.meta.env.VITE_BACKEND_URL}categorias`;
const productsEndpoint = `${import.meta.env.VITE_BACKEND_URL}productos`;
const caracteristicaEndpoint = `${
  import.meta.env.VITE_BACKEND_URL
}caracteristica`;
const initialProductForm = {
  nombre: "",
  descripcion: "",
  precio: 0,
  imagenes: [],
  caracteristicas: [
    {
      id: 0,
      nombre: "Selecciona Característica 1",
    },
    {
      id: 1,
      nombre: "Selecciona Característica 2",
    },
    {
      id: 2,
      nombre: "Selecciona Característica 3",
    },
  ],
  categorias: [
    {
      id: 0,
      nombre: "Selecciona Categoría",
    },
  ],
};

const RegisterProduct = () => {
  const [productForm, setProductForm] = useState({ ...initialProductForm });
  const [enableSubmit, setEnableSubmit] = useState(false);
  const [categorys, setCategorys] = useState([]);
  const [caracteristicas, setCaracteristicas] = useState([]);
  const [images, setImages] = useState([]);

  const file = useRef();

  const handleChangeForm = (e) => {
    setProductForm({
      ...productForm,
      [e.target.id]: e.target.value,
    });
  };
  const updateCategory = (key, value) => {
    setProductForm({
      ...productForm,
      [key]: [{ ...value }],
    });
  };

  /*   const updateCaracteristica = (key, value) => {
    setProductForm({
      ...productForm,
      [key]: [{ ...value }],
    });
  }; */

  const updateCaracteristica = (index, value) => {
    const updatedCaracteristicas = [...productForm.caracteristicas];
    updatedCaracteristicas[index] = { ...value };
    setProductForm({
      ...productForm,
      caracteristicas: updatedCaracteristicas,
    });
  };

  const uploadImage = (id, file) => {
    const storage = getStorage();
    const storageRef = ref(storage, "images/product/" + id + "/" + file.name);
    uploadImage2Spring(id, file);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
        });
      }
    );
  };

  const uploadImage2Spring = (productId, file) => {
    const formData = new FormData();
    formData.append("image", file);

    fetch(
      `${import.meta.env.VITE_BACKEND_URL}productos/${productId}/subir-imagen`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleChangeFiles = (e) => {
    const namefiles = Array.from(e.target.files).map((file) => file.name);
    
    setImages(Array.from(e.target.files));
    /*
    Array.from(e.target.files).forEach((file) => {
      fetch(productsEndpoint, {
        method: "POST",
        body: JSON.stringify(productForm),
        headers: {
          "Content-Type": "application/json",
        },
      })
      
    });
    */
  };

  const handleSubmitForm = (e, form) => {
    e.preventDefault();
    fetch(productsEndpoint, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        if (resp.status === 200) {
          console.log("Product Saved");
          Swal.fire("Producto guardado con éxito!", "", "success");
          setProductForm({ ...initialProductForm });
          file.current.value = null;
          /* Todo esto para obtener el id del producto */
          fetch(productsEndpoint, {
            method: "GET",
          })
            .then((allProductsResponse) => {
              return allProductsResponse.json();
            })
            .then((allProductsData) => {
              console.log(allProductsData, form);
              const savedProduct = allProductsData.find(
                (e) => e.nombre == form.nombre
              );
              console.log({ savedProduct });
              Array.from(images).forEach((file) => {
                uploadImage(savedProduct.id, file);
              });
            });
        } else {
          Swal.fire(
            "Error guardando producto!",
            "Ya existe el producto o intenta de nuevo",
            "error"
          );
        }
      })
      .catch((err) => {
        console.error(err);
        Swal.fire(
          "Error guardando producto!",
          "Ya existe el producto o intenta de nuevo",
          "error"
        );
      });
  };

  useEffect(() => {
    const { nombre, categorias, descripcion, precio, imagenes } = productForm;
    const validityTextFields =
      !!nombre && !!categorias[0]?.nombre && !!descripcion;
    const validityNumberFields = precio > 0;

    setEnableSubmit(
      validityTextFields && validityNumberFields
    );
  }, [productForm]);

  useEffect(() => {
    fetch(categorysEndpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        console.log("Response", resp);
        setCategorys(resp);
      });

    fetch(caracteristicaEndpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        console.log("Response", resp);
        setCaracteristicas(resp);
      });
  }, []);

  return (
    <section className="card-container" style={{ maxWidth: "125vh", height: "auto",marginBottom:"6%"}}>
      <h2>Registra tú producto</h2>
      <form onSubmit={(e) => handleSubmitForm(e, productForm)}>
        <label>Nombre producto: </label>
        <input
          id="nombre"
          className="form-control"
          onChange={handleChangeForm}
          value={productForm.nombre}
        />
        <label>Categoría: </label>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {productForm.categorias[0].nombre}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {categorys.map((category, idx) => (
              <Dropdown.Item
                key={idx}
                onClick={() => updateCategory("categorias", category)}
              >
                {category.nombre}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <label>Caracteristicas: </label>
        <div style={{ display: "flex", gap: "20px" }}>
          {[0, 1, 2].map((index) => (
            <Dropdown key={index}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {productForm.caracteristicas[index].nombre}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {caracteristicas.map((caracteristica, idx) => (
                  <Dropdown.Item
                    key={idx}
                    onClick={() => updateCaracteristica(index, caracteristica)}
                  >
                    {caracteristica.nombre}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          ))}
        </div>

        <label>Descripción: </label>
        <textarea
          id="descripcion"
          className="form-control"
          onChange={handleChangeForm}
          value={productForm.descripcion}
        />
        <label>Precio: </label>
        <div className="input-group mb-3">
          <span className="input-group-text">$</span>
          <input
            id="precio"
            type="number"
            className="form-control"
            aria-label="Amount (to the nearest dollar)"
            onChange={handleChangeForm}
            value={productForm.precio}
          />
        </div>
        <label>Carga imágenes del producto: </label>
        <input
          ref={file}
          className="form-control"
          id="file"
          type="file"
          multiple
          onChange={handleChangeFiles}
        />
        <button
          type="submit"
          className="btn btn-primary btn-lg"
          disabled={!enableSubmit}
          style={{ marginTop: "40px", marginLeft: "40%", backgroundColor: "#0aa8bd", color: "white" }}
          
        >
          Guardar
        </button>
      </form>
    </section>
  );
};

export default RegisterProduct;
