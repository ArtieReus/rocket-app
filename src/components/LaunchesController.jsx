import React, { useEffect } from "react"
import LaunchesList from "./LaunchesList"

const LaunchControllerController = ({}) => {
  const [launches, setLaunches] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    // This will run when the component is mounted
    console.log("Mounted")
    fetch("https://api.spacexdata.com/v4/launches")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setLaunches(data)
        setLoading(false)
      })
  }, [])

  return (
    <div>
      <LaunchesList launches={launches} loading={loading} />
    </div>
  )
}

export default LaunchControllerController
