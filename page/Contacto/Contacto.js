import "./Contacto.css";

const template = () => {
    return `
    <h3>¿Tienes alguna pregunta?</h3>
    
    <a href="#null" id="email-link">info@delicatessendongourmet.com</a>

     <section class="maps">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8434.003652167577!2d-4.686734!3d40.656722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd40f300abe14a35%3A0x18a5f36d9d0ebfb5!2sDelicatessen%20Don%20Gourmet!5e1!3m2!1ses!2ses!4v1692263225909!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </section>
    <div class="icons">
    <img class="telephone" src="https://cdn-icons-png.flaticon.com/128/5068/5068731.png"/>
    <h5>Teléfono: +34622185511</h5>
    <img class="location"  src="https://cdn-icons-png.flaticon.com/128/3916/3916862.png"/>
    <h6>P.º de la Estación, 18, 05001 Ávila</h6>
    <img class="email"     src="https://cdn-icons-png.flaticon.com/128/5068/5068658.png"/>
    <h7>info@delicatessendongourmet.com</h7>

    </div>
    
`;
};

const Contacto = () => {
    document.querySelector("main").innerHTML = template();
  };
  
  export default Contacto;