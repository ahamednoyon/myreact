import './App.css';

function App() {
  // const friendsName =['Rahim', 'Karim', 'Jarim', 'Lorim', 'Rahim2', 'Karim2', 'Jarim2', 'Lorim2'];
  // console.log(friendsName);


  const products = [
    {name: 'Photoshop', price: '$190.90'},
    {name: 'illustrator', price: '$60.50'},
    {name: 'Pdf Reader', price: '$40.50'},
    {name: 'Lightroom', price: '$80.50'},
    {name: 'Sketch', price: '$50.50'},
    {name: 'DoubleTouch', price: '$70.50'},
    {name: 'ReTouch', price: '$40.50'},
    {name: 'Premire Ei', price: '$240.50'},
    {name: 'Premire Pro', price: '$250.50'},


  ]

  return (
    <section className="home">
      <div className="container">
        <main className="box">
        
        {
          products.map(pd => <Product name={pd.name} price={pd.price}></Product>)
        }
          
        </main>
      </div>
    </section>
  );
}


function Product(props){
  return(
    <div className="product-style">
      <h3>{props.name}</h3>
      <h2>{props.price}</h2>
      <button className="btn-style">Buy Now</button>
    </div>
  )

}




export default App;
