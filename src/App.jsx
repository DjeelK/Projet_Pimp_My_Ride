import NavBar from './components/header/NavBar'
import ImgHome from './assets/website_home.png'

function App() {
  return (
    <div className="App">
      <header>
          <NavBar/>
      </header>
      <main className='container'>
        <div>
        <img src={ImgHome} alt="mon image"/>
        </div>

      </main>
    </div>
  );
}

export default App;
