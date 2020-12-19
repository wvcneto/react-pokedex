import React from 'react'

import './styles.css'

const PokeballLoader = () => {
  return (
    <div className="poke_container">
      <div className="pokeball  ball">
        <div className="pokeball_part_bottom" />
        <div className="pokeball_shadow  ball" />
        <div className="belt" />
        <div className="belt_loop" />
        <div className="belt_bg" />
        <div className="belt_loop_inside" />
        <div className="belt_loop_button" />
        <div className="pokeball_light" />
      </div>
      <div className="pokeball_ground_shadow ball" />
    </div>
  )
}

export default PokeballLoader
