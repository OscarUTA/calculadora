
import './App.css';
import Logo from './imagenes/utalogo.png';
import Boton from './componentes/Boton';
function App() {
  return (
    <div className='App'>
      <div className='logo-center'>
        <img 
         src={Logo}
         className='logo'
         alt='logo de oscar uta' />
      </div>
      <div className='contenedor-calculadora'>
        <div className='fila'></div>
        <Boton>1</Boton>
        <div className='fila'></div>
        <Boton>+</Boton>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
      </div>
    </div>
  );
}

export default App;
