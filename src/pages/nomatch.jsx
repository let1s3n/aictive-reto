import React from 'react'
import { Link } from "react-router-dom";
const NoMatch = () => {
  return (
    <div>
      <h2>No hay nada aquí!</h2>
      <p>
        <Link to="/">Ir a la página principal</Link>
      </p>
    </div>
  );
}

export default NoMatch