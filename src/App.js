
import React, { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))

  }, [])

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
          products.map(pd => <Product productName={pd.name}  productPrice={pd.price}></Product>)
        }
       
        <MovieCounter></MovieCounter>
        <MovieCounter></MovieCounter>
        <MovieCounter></MovieCounter>
        <MovieCounter></MovieCounter>
        <MovieCounter></MovieCounter>
        <MovieCounter></MovieCounter>

        {
          users.map(us => <UsersList name={us.name} key={us.id} email={us.email} address={us.address.city}></UsersList>)
        }
        </main>
        

        
        

      </div>
    </section>
  );
}


function Product(props){
  return(
    <div className="product-style">
      <h3>{props.productName}</h3>
      <h2>{props.productPrice}</h2>
      <button className="btn-style">Buy Now</button>
    </div>
  )

}


function MovieCounter(){
  const [count, setCount] = useState(5);
  const handleClick = () => setCount(count + 1);

  return(
    <div className="movie-style">
      <h2>The number of movie {count}</h2>
      <button onClick={handleClick}>Add Movie</button>
    </div>
  )
}




function UsersList(props){
  return(
    <div className="user-style">
      <h3>Name: {props.name} </h3>
      <h4>Email: {props.email} </h4>
      <h5>Address: {props.address}</h5>
    </div>
  )
}





export default App;
