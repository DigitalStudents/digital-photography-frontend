import React from 'react'

const RegisterProduct = () => {
  return (
    <section className='card-container'>
        <h2>Registra tú producto</h2>
        <form>
          <label >Nombre producto: </label>
          <input class="form-control"/>
          <label>Descripción: </label>
          <input class="form-control"/>
          <label>Carga imágenes del producto: </label>
          <input class="form-control" type='file' multiple/>
          
        </form>
    </section>
  )
}

export default RegisterProduct