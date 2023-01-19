import React, { useContext } from 'react'
import AppContext from '../context/AppContext'

export default function ErrorBox() {
  const { error } = useContext(AppContext);
  return (
    <div className='error-box'>
      <span>{error.message}</span>
    </div>
  )
}
