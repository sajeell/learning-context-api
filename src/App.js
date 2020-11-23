import { useState } from 'react'
import './App.css'
import Context from './components/context/context.js'
import FirstName from './components/first-name.js'
import LastName from './components/last-name.js'

function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const name = {
    firstName: firstName,
    lastName: lastName,
  }

  const handleFirstName = (e) => {
    e.preventDefault()
    setFirstName(e.target.value)
  }

  const handleLastName = (e) => {
    e.preventDefault()
    setLastName(e.target.value)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setFirstName('')
    setLastName('')
  }

  return (
    <div className="App">
      <div>
        <input type="text" placeholder="First Name" onChange={handleFirstName} value={firstName} />
      </div>
      <div>
        <input type="text" placeholder="Last Name" onChange={handleLastName} value={lastName} />
      </div>
      <div>
        <button onClick={handleFormSubmit}>Submit</button>
      </div>

      <Context.Provider value={name}>
        <FirstName />
        <LastName />
      </Context.Provider>
    </div>
  )
}

export default App
