import React from 'react'
import { useRouteMatch } from 'react-router-dom'

export default function Pokemon() {
  const { params } = useRouteMatch()
  const { id } = params

  return (
    <div>
      <p>This page is for pokemon number #[{id}]</p>
    </div>
  )
}
