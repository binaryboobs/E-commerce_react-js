import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
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
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />
        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({currentItems: this.state.items})
      return;
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
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
