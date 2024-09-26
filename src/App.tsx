import './App.css'
import Header from './components/header/Header.tsx'
import HeroImage from './components/HeroImage.tsx'

function App() {
  return (
    <div>
      <Header />
      <HeroImage name={"RD Radotín"} location={"panvel"} type={'Commercial'} year={2000} />
      <HeroImage name={"Dreams"} location={"bhandup"} type={'Residentail'} year={1999}/>
    </div>
  )
}

export default App
