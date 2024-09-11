function App() {
  const name= 'May';
  const pelis= ['Harry Potter', 'El código Da Vinci', 'Avengers'];

  return (
    <div>
      <h1>Mi primera app en react</h1>
      <img src=" https://definicion.de/wp-content/uploads/2009/12/paisaje-1.jpg "/>
      <p>Mi nombre es {name}</p>
      <h2>Las últimas 3 películas que ví son: </h2>
      <ul>
        {pelis.map(peli => <li>{peli}</li>)}
      </ul>
    </div>
  );
}

export default App;
