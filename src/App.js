import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'

import './App.css'
import 'react-toastify/dist/ReactToastify.css'

import Context from './components/context/context.js'
import FirstName from './components/first-name.js'
import LastName from './components/last-name.js'

function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [number, setNumber] = useState('')

  useEffect(() => {
    toast.info('✨ Enter the data and press submit button to see the magic')
  }, [])

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

  const handleNumber = (e) => {
    e.preventDefault()
    setNumber(e.target.value)
    if (number.length === 10) {
      let temp1, temp2
      temp1 = number.substr(0, 4)
      temp2 = number.substr(4, 7)
      setNumber(temp1 + '-' + temp2)
    }
  }

  const handleFormSubmit = (e) => {
    if (firstName.length === 0 || lastName.length === 0 || number.length === 0) {
      toast.error('😔 Enter missing values')
    } else {
      e.preventDefault()
      setFirstName('')
      setLastName('')
      setNumber('')
      document.title = `${firstName} ${lastName}`
      toast.success('🦄 Submitted')
    }
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
        <input type="text" placeholder="Phone Number" onChange={handleNumber} value={number} />
      </div>
      <div>
        <button onClick={handleFormSubmit}>Submit</button>
      </div>
      <ToastContainer />
      <Context.Provider value={name}>
        <FirstName />
        <LastName />
      </Context.Provider>
    </div>
  )
}

export default App
