import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Gray chair',
          img: 'chair-grey.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Table',
          img: 'table.webp',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
          category: 'tables',
          price: '149.00'
        },
        {
          id: 3,
          title: 'White sofa',
          img: 'sofa-white.webp',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
          category: 'sofas',
          price: '399.99'
        },
        {
          id: 4,
          title: 'Wooden desk',
          img: 'desk-wood.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
          category: 'desks',
          price: '219.50'
        },
        {
          id: 5,
          title: 'Black lamp',
          img: 'lamp-black.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
          category: 'lamps',
          price: '35.00'
        },
        {
          id: 6,
          title: 'Blue armchair',
          img: 'armchair-blue.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
          category: 'chairs',
          price: '129.99'
        },
        {
          id: 7,
          title: 'Round coffee table',
          img: 'coffee-table-round.webp',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
          category: 'tables',
          price: '89.90'
        },
        {
          id: 8,
          title: 'Beige bed',
          img: 'bed-beige.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
          category: 'beds',
          price: '499.00'
        },
        {
          id: 9,
          title: 'Modern wardrobe',
          img: 'wardrobe-modern.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
          category: 'wardrobes',
          price: '650.00'
        },
        {
          id: 10,
          title: 'Minimalist shelf',
          img: 'shelf-minimalist.webp',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
          category: 'shelves',
          price: '74.99'
        }
      ]
    }
  }
  render(){
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items} />
        <Footer />
      </div>
    );
  }
}

export default App;
