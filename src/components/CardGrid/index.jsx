import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Card from '../Card'
import PokeballLoader from '../PokeballLoader'

import { Grid } from './styles'
import Pagination from '../Pagination'

export default function CardGrid() {

  const [pokemonList, setPokemonList] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=21"
  )
  const [nextPage, setNextPage] = useState()
  const [previousPage, setPreviousPage] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setLoading(false)
      setNextPage(res.data.next)
      setPreviousPage(res.data.previous)
      setPokemonList(res.data.results.map((p) => p))
    })

    return () => cancel()
  }, [currentPageUrl])

  function goToNextPage() {
    setCurrentPageUrl(nextPage)
  }

  function goToPreviousPage() {
    setCurrentPageUrl(previousPage)
  }

  return (
    <>
      { loading ? (
        <PokeballLoader />
      ) : (
        <>
          <Grid>
            {pokemonList.map((p) => <Card key={p.name} pokemon={p} /> )}
          </Grid>
          <Pagination
            goToNextPage={ nextPage ? goToNextPage : null }
            goToPreviousPage={ previousPage ? goToPreviousPage : null }
          />
        </>
      )}
    </>
  )
}
