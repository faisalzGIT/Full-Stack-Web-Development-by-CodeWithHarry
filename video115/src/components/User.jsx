import { useParams } from "react-router-dom"
const User = () => { 
    const id = useParams()
  return (
      <div>
        i am {id.username}
      </div>
  )
}

export default User
