import React from 'react'
import { data } from './data'
import './component.css'
import { useState } from 'react'

function component() {
  let [person, setPerson] = useState(data)

  const clearElements = () => {
    setPerson([])

  }

  return (

    <div className="container">
      <h3> {person.length} Birthday Today</h3>
      {person.map((link) => {
        return (
          <div className="person" key={link.id}>
            <img className="img" src={link.image} alt="" />
            <div>
              <h4>{link.name}</h4>
              <p>{link.age} years </p>
            </div>

          </div>

        )
      })}
      <button onClick={clearElements} className='btn-block'>Clear List</button>







    </div>

  )

}

export default component
