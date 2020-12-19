import React, { useEffect, useState } from 'react'

import api from '../../services/pokemonService'
import Loader from '../Loader'

import { Container, Content, Name, Image } from './styles'

const Card = ({ pokemon }) => {  

  const { url } = pokemon
  const id = pokemon.url.slice(34).replace('/', '')

  const [pokemonData, setPokemonData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    api.get(url).then(response => {
      setPokemonData(response.data)
    })
    console.log(pokemonData)
    setLoading(false)
  }, [url, pokemonData])

  return (
    <Container>
      <Content>
        { loading ? (
          <Loader />
        ) : (
          <>
            <Name>
              {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
            </Name>
            <Image src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}/>             
          </>
        )}
      </Content>
    </Container>
  )
}

export default Card
