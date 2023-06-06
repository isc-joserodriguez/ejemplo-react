import './App.css';
import ComponenteImportado from './otroNombre/Componente';

function App() {
  const personas = [
    {
      nombre: 'Mario',
      edad: '10',
    },
    {
      nombre: 'Pedro',
      edad: '80',
    },
    {
      nombre: 'Ramona',
      edad: '20',
    },
    {
      nombre: 'Paola',
      edad: '5',
    },
    {
      nombre: 'Luis',
      edad: '60',
    },
  ];
  return (
    <div>
      <h1>Hola, esta es mi primera App!!!!!</h1>
      <a href="http://www.google.com">Ir a Google!</a>
      <br />
      {/* <ComponenteImportado nombre="Rocío" edad="30" /> 
      <ComponenteImportado nombre="Mario" edad="20" /> 
  <ComponenteImportado nombre="Julio" edad="10" />  */}
      {personas.map((persona) => (
        <div>
          <h1>Mensaje</h1>
          <ComponenteImportado nombre={persona.nombre} edad={persona.edad} />
          {/* Props */}
        </div>
      ))}
    </div>
  );
}

// SPA
// Single Page Application

export default App;
