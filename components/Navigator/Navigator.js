import "./Navigator.css";

const template = () => {
    return `
    <nav>
     <img src="https://www.delicatessendongourmet.com/images/logo.png"/>
     <ul>
       <li>
          <a href="#null" id="inicio-link">Inicio</a>
        </li>
        <li>
          <a href="#null" id="nosotros-link">Nosotros</a>
        </li>
        <li>
          <a href="#null" id="productos-link">Productos</a>
        </li>
        <li>
          <a href="#null" id="contacto-link">Contacto</a>
        </li>
      </ul>
     </nav>
     
    `;
  };
  const Navigator = () => {
    document.querySelector("header").innerHTML = template();
  };
  
  export default Navigator;