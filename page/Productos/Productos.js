import "./Productos.css";

const template = () => {
    return `
    <article>
     <img class="products" src="https://www.delicatessendongourmet.com/images/0001.jpg" />
     <img class="products" src="https://www.delicatessendongourmet.com/images/0009.jpg" />
     <img class="products" src="https://www.delicatessendongourmet.com/images/0003.jpg" />
     <img class="products" src="https://www.delicatessendongourmet.com/images/0004.jpg" />
     <img class="products" src="https://www.delicatessendongourmet.com/images/0005.jpg" />
     <img class="products" src="https://www.delicatessendongourmet.com/images/0006.jpg" />
     <img class="products" src="https://www.delicatessendongourmet.com/images/0007.jpg" />
     <img class="products" src="https://www.delicatessendongourmet.com/images/0008.jpg" />
    </article>
`;
};

const Productos = () => {
    document.querySelector("main").innerHTML = template();
  };
  
  export default Productos;

