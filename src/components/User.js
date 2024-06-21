import React from 'react'
import { useParams } from 'react-router-dom'
export default function User() {
    const parm=useParams();
  return (
    <div>
      hello {parm.username}
    </div>
  )
}
