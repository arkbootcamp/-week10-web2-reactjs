import React from 'react'
import './card.css'

function CardStatus(props) {
    return (
      <div className={`card ${props.color && props.color}`}>
        <div className="card-body">
          <h2 className="card-title text-center">
            {props.TotalConfirmed}
          </h2>
          <h3 className="card-subtitle mb-2 text-muted text-center">
            {props.title}
          </h3>
        </div>
      </div>
    );
}

export default CardStatus
