import { Link } from 'react-router-dom'
import './App.css'


function App() {

  return (
   <>
    <Link to={'/alert'}>Basic Alert components</Link>
    <br/>
    <br/>
    <Link to={'/accrodian'}>Basic Expand / Accordian</Link>
   </>
  )
}

export default App
