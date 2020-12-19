import React, { useState, useEffect } from 'react'

import api from '../../services/pokemonService'

import Card from '../Card'
import PokeballLoader from '../PokeballLoader'

import { Grid } from './styles'
import Pagination from '../Pagination'

const CardGrid = () => {

  const [pokemonList, setPokemonList] = useState([])
  const [currentGeneration, setCurrentGeneration] = useState(1)
  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(151)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    api.get(`?offset=${offset}&limit=${limit}`).then(response => {
      setPokemonList(response.data.results)    
      setLoading(false)
    })
  }, [offset, limit])  

  function goToGeneration(generation) {
    switch(generation) {
      case 1:
        setOffset(0)
        setLimit(151)
        setCurrentGeneration(1)
        break
      case 2:
        setOffset(151)
        setLimit(250)
        setCurrentGeneration(2)
        break
      case 3:
        setOffset(251)
        setLimit(385)
        setCurrentGeneration(3)
        break
      case 4:
        setOffset(386)
        setLimit(492)
        setCurrentGeneration(4)
        break
      case 5:
        setOffset(493)
        setLimit(648)
        setCurrentGeneration(5)
        break
      case 6:
        setOffset(649)
        setLimit(720)
        setCurrentGeneration(6)
        break
      case 7:
        setOffset(721)
        setLimit(808)
        setCurrentGeneration(7)
        break
      case 8:
        setOffset(809)
        setLimit(897)
        setCurrentGeneration(8)
        break
      default:
        return 'Incorrect Generation'
    }
  }  

  return (
    <>
      { loading ? (
        <PokeballLoader />
      ) : (
        <>
          <Pagination
            goToNextPage={ () => goToGeneration(currentGeneration+1) }
            goToPreviousPage={ () =>goToGeneration(currentGeneration-1) }
          />
          <Grid>
            {pokemonList.map((p) => <Card key={p.name} pokemon={p} /> )}
          </Grid>          
        </>
      )}
    </>
  )
}

export default CardGrid
