import React, { useEffect, useMemo, useState } from "react"

const Pagination = ({ offset, perPage, onPaginate }) => {
  const onNext = () => {
    const newOffset = offset + perPage
    console.log("New Offset: ", newOffset)
    onPaginate(newOffset)
  }

  const onPrevious = () => {
    const newOffset = offset - perPage
    console.log("New Offset: ", newOffset)
    onPaginate(newOffset)
  }

  return (
    <div>
      <button onClick={onPrevious}>Previous</button>
      <button onClick={onNext}>Next</button>
    </div>
  )
}

export default Pagination
