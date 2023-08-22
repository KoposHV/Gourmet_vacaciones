import "./Nosotros.css";


const template = () => {
    return `
    <img class="entrada" src="https://www.delicatessendongourmet.com/images/01.jpg" alt="entrada tienda" />
    <p>Delicatessen Don Gourmet</p>
    <p class="title">Personalice la cesta a su gusto y gaste justo lo que necesite.</p>
    <div>Delicatessen Don Gourmet abrió sus puertas en 2007, intentando hacer llegar al cliente un producto de alta calidad a su justo precio, puesto que nos encanta nuestro trabajo.</div>
    
    <section>Con toda la experiencia recigida en más de 15 años, recomendamos a nuestros clientes exactamente lo que necesitan y dentro de su presupuesto para los regalos que se hacen a diario a particulares, empresas y como no para navidades o fiestas señaladas. Desde un auténtico jamón de bellota al corte, hasta un buen vino con oro para un brindis muy especial.</section>
    
    `;
};

const Nosotros = () => {
    document.querySelector("main").innerHTML = template();

};

export default Nosotros;

