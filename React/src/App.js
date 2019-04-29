import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Link from './Link';
import Products from "./Products";
import Card from './Card';
import Footer from './Footer';


class App extends Component {

  constructor(){
    super();
    this.state = {
      products: Products,
      filtered: Products,
      badges: Products
    }
  }

  componentDidMount(){
      document.querySelectorAll('.fl')[0].classList.add('orange');
      document.querySelectorAll('.fl')[0].firstElementChild.classList.add('orangeBg');

  }

filterLinks(value,e){
    e.preventDefault();
      if(value !== 'Show All'){
            this.setState({
            filtered: this.state.products.filter(element =>{
              return  element.gender === value || element.brand.includes(value);
            })
          })
        }else{
          this.setState({
            filtered: this.state.products
          })
        }
        const target = e.target;
        if(!target.classList.contains('orange')){
          document.querySelectorAll('.fl').forEach(element => {
            element.firstElementChild.classList.remove('orangeBg');
            element.classList.remove('orange');
          })
          target.firstElementChild.classList.add('orangeBg');
          target.classList.add('orange');
        }
  }

  render() {
    const {products,filtered} = this.state;
    return (
      <div className="App">
       <Header />
       <div className="wrapper">
       </div>
       <div className="con">
         <div className="Filters">
           <h2>Filtered by:</h2>
           <Link badge={products.length} link="SHOW All"  onClick={(e)=> this.filterLinks('Show All',e)}/>
           <h2>Gender</h2>
           <Link badge={products.filter(e => {return e.gender === "MALE"}).length} link="Male"  onClick={(e)=> this.filterLinks('MALE',e)}/>
           <Link badge={products.filter(e => {return e.gender === "FEMALE"}).length} link="Female"  onClick={(e)=> this.filterLinks('FEMALE',e)}/>
           <h2>Brand</h2>
           <Link badge={products.filter(e => {return e.brand.includes('GRAND')}).length}  link="LE GRAND BIKES"  onClick={(e)=> this.filterLinks('GRAND',e)} />
           <Link badge={products.filter(e => {return e.brand.includes('KROSS')}).length}  link="KROSS"  onClick={(e)=> this.filterLinks('KROSS',e)} />
           <Link badge={products.filter(e => {return e.brand.includes('EXPLORER')}).length}  link="EXPLORER"  onClick={(e)=> this.filterLinks('EXPLORER',e)} />
           <Link badge={products.filter(e => {return e.brand.includes('VISITOR')}).length}  link="VISITOR"  onClick={(e)=> this.filterLinks('VISITOR',e)} />
           <Link badge={products.filter(e => {return e.brand.includes('PONY')}).length}  link="PONY"  onClick={(e)=> this.filterLinks('PONY',e)} />
           <Link badge={products.filter(e => {return e.brand.includes('FORCE')}).length}  link="FORCE"  onClick={(e)=> this.filterLinks('FORCE',e)} />
           <Link badge={products.filter(e => {return e.brand.includes('E-BIKES')}).length}  link="E-BIKES"  onClick={(e)=> this.filterLinks('E-BIKES',e)} />
           <Link badge={products.filter(e => {return e.brand.includes('IDEAL')}).length}  link="IDEAL"  onClick={(e)=> this.filterLinks('IDEAL',e)} />
         </div>
         <div className="right">
           {
            this.state.filtered.map((element,index)=> {
              return <Card key={index} id={index} img={`img/${element.image}.png`} text={element.name} price={`${element.price} $`} />
            })
           }
         </div>
       </div>
        <Footer />
      </div>
    );
  }
}

export default App;
