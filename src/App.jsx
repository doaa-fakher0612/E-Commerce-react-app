import Header  from './Components/Header'
import MainContent from './Components/MainContent'
import "./index.css"
import './App.css'

export default function App(){
  return (
   <div id ="main-wrapper" className='m-3'>
    <Header/>
    <MainContent/>
   </div>
  )
}

