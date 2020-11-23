import { useContext } from 'react'
import Context from './context/context.js'
function FirstName() {
  const name = useContext(Context)
  return (
    <div className="first-name">
      <p>{name.firstName}</p>
    </div>
  )
}

export default FirstName
