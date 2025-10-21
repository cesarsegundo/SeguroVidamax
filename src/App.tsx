
import './App.scss'
import Banner from './components/Banner'
import NavBar from './components/NavBar'
import Navigate from './components/Navigate'
import vidamaxImage from './assets/vidamax-image.png';
import Sections from './components/Sections'

function App() {

  return (
    <>
    <div className='navbar-image'></div>
      <NavBar />
      <div className='container-vidamax'>
        <div>
          <Navigate />
          <Banner />
          <Sections />
        </div>
        <div>
          <img loading="lazy" src={vidamaxImage} alt="" />
        </div>
      </div>
    </>
  )
}

export default App
