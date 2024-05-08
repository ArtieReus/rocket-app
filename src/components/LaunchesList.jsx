import React, { useEffect, useState } from "react"
import Pagination from "./Pagination"

/*
Launch Name
Local Date
Description
Image
Link to youtube
*/

const PER_PAGE = 5

const LaunchesList = ({ launches, loading }) => {
  const [displayLaunches, setDisplayLaunches] = useState([])
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    if (!launches) return
    const paginatedItems = launches.slice(offset, offset + PER_PAGE)
    const sortedLaunches = paginatedItems.sort((a, b) => {
      const nameA = a.name.toUpperCase()
      const nameB = b.name.toUpperCase()
      if (nameA < nameB) {
        return -1
      }
      if (nameA > nameB) {
        return 1
      }
      return 0
    })
    setDisplayLaunches(sortedLaunches)
  }, [launches, offset])

  const onSearchChanged = (option) => {
    const search = option.target.value
    const filteredLaunches = launches.filter((launch) => {
      return launch.name.toLowerCase().includes(search.toLowerCase())
    })
    setDisplayLaunches(filteredLaunches)
  }

  const onPaginate = (newOffset) => {
    console.log("Page: ", newOffset)
    setOffset(newOffset)
  }

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <input type="text" placeholder="Search" onChange={onSearchChanged} />
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Date</th>
                <th>Description</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {displayLaunches?.map((launch, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img src={launch.links.patch.small} alt={launch.name} />
                    </td>
                    <td>{launch.name}</td>
                    <td>{launch.date_local}</td>
                    <td>{launch.details}</td>
                    <td>
                      <a href={launch.links.webcast} target="_blank">
                        Watch
                      </a>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <Pagination
            offset={offset}
            perPage={PER_PAGE}
            onPaginate={onPaginate}
          />
        </>
      )}
    </>
  )
}

export default LaunchesList
