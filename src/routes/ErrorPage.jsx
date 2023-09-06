import { useRouteError } from "react-router-dom"
import NavigationBar from "../components/NavigationBar"


const ErrorPage = () => {
  const error = useRouteError()

  return (
    <div className="App">
      <header>
        <NavigationBar/>
      </header>
      <main className="container">
        <div className="my-3 row">
          <div className="col-10 offset-1 rounded bg-dark p-3 text-light">
            <h3>Error {error.status}</h3>
            <hr />
            <p>{error.data}</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ErrorPage