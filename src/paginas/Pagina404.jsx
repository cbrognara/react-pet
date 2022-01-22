import React from "react";
import '../assets/css/404.css'
import image from '../assets/img/doguito404.svg'

const Pagina404 = () => {
  return (
    <main className="container flex flex--centro flex--coluna">
      <img className="doguito-imagem" src={image} alt='ilustração doguito'/>
      <p className="naoencontrado-texto">
        Ops! Não encontramos essa página.
      </p>
    </main>
  )
}

export default Pagina404