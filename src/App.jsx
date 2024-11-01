import './App.css'
import LineCharts from './components/LineCharts/LineCharts'
// import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Phones from './components/Phones/Phones'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {


  return (
    <>
      <Nav></Nav>
      <h1 className='text-center text-2xl font-bold py-2'>React Project</h1>

      <PriceOptions></PriceOptions>
      
     {/* <Header></Header> */}
     <LineCharts></LineCharts>
     <Phones></Phones>
      
    </>
  )
}

export default App
