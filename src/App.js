import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Gray chair',
          img: 'gray_chair.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Table',
          img: 'table.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
          category: 'tables',
          price: '149.00'
        },
        {
          id: 3,
          title: 'White sofa',
          img: 'white_sofa.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
          category: 'sofas',
          price: '399.99'
        },
        {
          id: 4,
          title: 'Wooden desk',
          img: 'wooden_desk.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
          category: 'desks',
          price: '219.50'
        },
        {
          id: 5,
          title: 'Black lamp',
          img: 'black_lamp.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
          category: 'lamps',
          price: '35.00'
        },
        {
          id: 6,
          title: 'Blue armchair',
          img: 'blue_armchair.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
          category: 'chairs',
          price: '129.99'
        },
        {
          id: 7,
          title: 'Round coffee table',
          img: 'round_coffee_table.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
          category: 'tables',
          price: '89.90'
        },
        {
          id: 8,
          title: 'Beige bed',
          img: 'beige_bed.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
          category: 'beds',
          price: '499.00'
        },
        {
          id: 9,
          title: 'Modern wardrobe',
          img: 'modern_wardrobe.jpeg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
          category: 'wardrobes',
          price: '650.00'
        },
        {
          id: 10,
          title: 'Minimalist shelf',
          img: 'minimalist_shelf.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
          category: 'shelves',
          price: '74.99'
        }
      ]
    }
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  deleteOrder(id) {
    this.setState(prevState => ({
      orders: prevState.orders.filter(el => el.id !== id)
    }))
  }

  addToOrder (item) {
    let isInArray = false;  
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true;
    })
    if(!isInArray)
      this.setState({orders: [...this.state.orders, item]})
  }
}

export default App;
