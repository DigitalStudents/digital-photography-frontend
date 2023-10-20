import {Link} from "react-router-dom";

export default function ProductBox({nombre,id,imagen, tipo, descripcion, precio_por_dia}){

    
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

    return (
        <Link to={`product/${id}`}>
            <div style={styles.container}>
            <img src={imagen} style={styles.image} alt={nombre} />
            <h1 style={styles.title}>Título: {nombre}</h1>
            <h2 style={styles.subtitle}>Tipo: {tipo}</h2>
            <h2 style={styles.subtitle}>Descripción: {descripcion}</h2>
            <h3 style={styles.price}>Precio: ${precio_por_dia}</h3>
            </div>
        </Link>);
}