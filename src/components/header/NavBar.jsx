// import { useDispatch } from "react-redux"

const NavBar = () => {
    // const user = useSelector(state => state.auth.user)
    // const dispatch = useDispatch()

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Logo</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Covoiturage</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Application</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><i class="bi bi-plus-circle"></i> Publier un trajet</a>
      </li>
      <button type="button" class="btn btn-outline-dark">Sign in</button>
      <button type="button" class="btn btn-dark">Register</button>
    </ul>
  </div>
</nav>
    )
    }

export default NavBar