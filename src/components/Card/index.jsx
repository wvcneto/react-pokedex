import React from 'react'

import { Container, Content, Name, Image } from './styles'

export default function Card({ pokemon }) {
  const id = pokemon.url.slice(34).replace('/', '')
  const name = pokemon.name

  function getUppercCaseName() {
    return name[0].toUpperCase() + name.slice(1)
  }

  function getPokemonImage() {
    return `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
  }

  return (
    <Container>
      <Content>
        <Name>{getUppercCaseName()}</Name>
        <Image src={getPokemonImage()} />
      </Content>
    </Container>
  )
}
