import './style.css'
import Navigator from './components/Navigator/Navigator';
import Inicio from './page/Inicio/Inicio';
import Nosotros from './page/Nosotros/Nosotros';
import Productos from './page/Productos/Productos';
import Contacto from './page/Contacto/Contacto';
import linkPage from './utils/linkPage';



Navigator()
Inicio()
Contacto()

const pages = [
    {
      id: "#inicio-link",
      page: Inicio,
    },
    {
      id: "#nosotros-link",
      page: Nosotros,
    },
    {
      id: "#productos-link",
      page: Productos,
    },
    {
      id: "#contacto-link",
      page: Contacto,
    },
  ];
  
  for (const page of pages) {
    linkPage(page.id, page.page);
  }