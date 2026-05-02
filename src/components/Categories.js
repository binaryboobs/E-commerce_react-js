import React, { Component } from 'react'

export class Categories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [
        { key: 'all', name: 'All' },
        { key: 'chairs', name: 'Chairs' },
        { key: 'tables', name: 'Tables' },
        { key: 'sofas', name: 'Sofas' },
        { key: 'desks', name: 'Desks' },
        { key: 'lamps', name: 'Lamps' },
        { key: 'beds', name: 'Beds' },
        { key: 'wardrobes', name: 'Wardrobes' },
        { key: 'shelves', name: 'Shelves' }
      ]
    }
  }

  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
          <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>
            {el.name}
          </div>
        ))}
      </div>
    )
  }
}

export default Categories