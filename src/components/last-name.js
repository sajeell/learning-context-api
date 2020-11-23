import { useContext } from 'react'
import Context from './context/context.js'
function LastName() {
  const name = useContext(Context)
  return (
    <div className="first-name">
      <p>{name.lastName}</p>
    </div>
  )
}

export default LastName
