import React from 'react'

import NavBar from '../../components/NavBar'
import CardGrid from '../../components/CardGrid'

import { Content, Title } from './styles';

export default function Pokedex() {
  return (
    <>
      <NavBar />
      <Content>
        <Title>Generation I</Title>
        <CardGrid />
      </Content>
    </>
  )
}
