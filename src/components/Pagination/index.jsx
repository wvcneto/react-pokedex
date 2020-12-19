import React from 'react'

const Pagination = ({ goToNextPage, goToPreviousPage }) => {
  return (
    <div>
      {goToPreviousPage && <button onClick={goToPreviousPage}>Previous Generation</button>}
      {goToNextPage && <button onClick={goToNextPage}>Next Generation</button>}
    </div>
  )
}

export default Pagination
