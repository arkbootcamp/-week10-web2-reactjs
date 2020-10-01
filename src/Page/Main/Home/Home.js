// import React, {Fragment} from 'react'

// function App(){
//   return(
//     <Fragment>
//       <h1>helo</h1>
//       <h2>world</h2>
//    </Fragment>
//   )
// }
// export default App;

import React, {Component} from 'react'
import Header from '../../../component/Header/Header'
import Card from '../../../component/Card/Card'
import {Link} from 'react-router-dom'

class App extends Component {
  constructor(){
    super()
    this.state = {
      email: '',
      foods: [
        {
        id: 1,
        name: 'nasi goreng',
        price : 15000
      },
      {
        id: 2,
        name: 'nasi kuning',
        price : 25000
      }
    ]
    }
  }

  handleChange(e){
    // console.log('ini value '+e.target.value)
    // console.log('ini state: '+this.state.name)
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render(){
    return (
      <div>
        <Header/>
        {
          this.state.foods.map((item)=>
            <Card name={item.name} price={item.price} key={item.id}/>
          )
        }
        
        <ul>
            <Link to="/about">halaman about</Link>
          <li>
          <input type="text" name="name" id="name" onChange={(e) => this.handleChange(e)} placeholder="name"/>
          </li>
          <li>
          <input type="text" name="email" id="email" onChange={(e) => this.handleChange(e)} placeholder="email"/>
          </li>
        </ul>
        <h4>nama: {this.state.name}</h4>
        <h5>email: {this.state.email}</h5>
      </div>
    )
  }
}
export default App