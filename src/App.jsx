
import BaristaForm from './Components/baristaForm';
import './App.css'

function App() {
  
  return (
    <div className='main-container'>
      <div className='title-container'>
        <h1 className='title'>On My Grind</h1>
        <p>So you think you can barista? Let's put that to the test...</p>
      </div>
      <BaristaForm />
    </div>
  )
}

export default App
