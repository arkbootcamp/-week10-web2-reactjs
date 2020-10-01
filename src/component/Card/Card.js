import React, {Component} from 'react'
import './card.css'

// export default function Card(props) {
//     return (
//         <div className="card">
//             <h4>{props.name}</h4>
//             <h6>Rp. {props.price}</h6>
//         </div>
//     )
// }

class Card extends Component{

    render(){
        return (
            <div className="card">
                <h4>{this.props.name}</h4>
                <h6>Rp. {this.props.price}</h6>
            </div>
        )
    }
}
export default Card