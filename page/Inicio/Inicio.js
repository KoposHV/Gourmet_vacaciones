import "./Inicio.css";

const template = () => {
    return `
    <div class="wrap">
     <div class=wrap-text">
      <h1>Delicatessen Don Gourmet,</h1>
      <h2>El deleite de la calidad en Avila</h2>
      <section class="container">  
       <button class="btn-1">Nosotros</button>
        
       <button class="btn-2">Contacto</button>
      </section>
     </div>
    </div>
    `;
    
  };
  
  const Inicio = () => {
    document.querySelector("main").innerHTML = template();
  };
  
  export default Inicio;