import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductDetail from './Components/ProductDetail/ProductDetail'
import ProductBox from "./Components/ProductBox/ProductBox";

function App() {
  const productos = [
      {
          "id": 1,
          "nombre": "Canon EOS 5D Mark IV",
          "tipo": "Cámara",
          "descripcion": "DSLR de 30.4 MP, grabación 4K",
          "precio_por_dia": 100,
          "imagen": "https://placehold.co/400x400"
      },
      {
          "id": 2,
          "nombre": "Nikon D850",
          "tipo": "Cámara",
          "descripcion": "DSLR de 45.7 MP, ISO 64-25600",
          "precio_por_dia": 110,
          "imagen": "https://placehold.co/400x400"
      },
      {
          "id": 3,
          "nombre": "Sony Alpha A7R IV",
          "tipo": "Cámara",
          "descripcion": "Mirrorless, 61 MP, grabación 4K",
          "precio_por_dia": 120,
          "imagen": "https://placehold.co/400x400"
      },
      {
          "id": 4,
          "nombre": "Fujifilm GFX 100",
          "tipo": "Cámara",
          "descripcion": "Mirrorless, 102 MP, sistema de formato medio",
          "precio_por_dia": 200,
          "imagen": "https://placehold.co/400x400"
      },
      {
          "id": 5,
          "nombre": "Canon EF 24-70mm f/2.8L II USM",
          "tipo": "Lente",
          "descripcion": "Zoom estándar, compatible con montura EF",
          "precio_por_dia": 40,
          "imagen": "https://placehold.co/400x400"
      },
      {
          "id": 6,
          "nombre": "Nikon AF-S 70-200mm f/2.8E FL",
          "tipo": "Lente",
          "descripcion": "Zoom telefoto, VR, montura F",
          "precio_por_dia": 50,
          "imagen": "https://placehold.co/400x400"
      },
      {
          "id": 7,
          "nombre": "Sony FE 50mm f/1.8",
          "tipo": "Lente",
          "descripcion": "Prime estándar, compatible con montura E de Sony",
          "precio_por_dia": 20,
          "imagen": "https://placehold.co/400x400"
      },
      {
          "id": 8,
          "nombre": "Godox AD600 Pro",
          "tipo": "Flash",
          "descripcion": "Flash con batería, TTL, HSS",
          "precio_por_dia": 40,
          "imagen": "https://placehold.co/400x400"
      },
      {
          "id": 9,
          "nombre": "Aputure AL-M9",
          "tipo": "Luz",
          "descripcion": "Luz LED portátil, temperatura de color ajustable",
          "precio_por_dia": 10,
          "imagen": "https://placehold.co/400x400"
      },
      {
          "id": 10,
          "nombre": "Trípode Manfrotto MT055XPRO3",
          "tipo": "Accesorio",
          "descripcion": "Trípode de aluminio, capacidad de carga de 9kg",
          "precio_por_dia": 15,
          "imagen": "https://placehold.co/400x400"
      },
      {
          "id": 11,
          "nombre": "Filtro ND variable Tiffen 77mm",
          "tipo": "Accesorio",
          "descripcion": "Reduce la cantidad de luz que entra en la lente",
          "precio_por_dia": 10,
          "imagen": "https://placehold.co/400x400"
      },
      {
          "id": 12,
          "nombre": "Tarjeta SD SanDisk 128GB",
          "tipo": "Accesorio",
          "descripcion": "Tarjeta de memoria de alta velocidad, 170MB/s de lectura",
          "precio_por_dia": 5,
          "imagen": "https://placehold.co/400x400"
      },
      {
          "id": 13,
          "nombre": "Gimbal DJI Ronin-S",
          "tipo": "Accesorio",
          "descripcion": "Estabilizador para cámaras DSLR y mirrorless",
          "precio_por_dia": 40,
          "imagen": "https://placehold.co/400x400"
      }


  ]
  const styles = {
      container: {
          border: '1px solid #e0e0e0',
          borderRadius: '10px',
          padding: '20px',
          maxWidth: '300px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          margin: '20px auto',
          textAlign: 'center'
      },
      image: {
          width: '100%',
          borderRadius: '10px',
          marginBottom: '15px'
      },
      title: {
          fontSize: '24px',
          fontWeight: 'bold',
          margin: '10px 0'
      },
      subtitle: {
          fontSize: '20px',
          margin: '5px 0',
          fontWeight: 'normal'
      },
      price: {
          fontSize: '22px',
          fontWeight: 'bold',
          color: '#e91e63',
          margin: '10px 0'
      }
  };

  return (<>
      {productos.map((p)=>(<ProductBox 
      id={p.id}
      imagen={p.imagen} 
      nombre={p.nombre}
      tipo={p.tipo} 
       descripcion={p.descripcion} 
       precio={p.precio_por_dia}/>))}
      </>);
}

export default App
