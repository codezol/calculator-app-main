import React from 'react'
import "./Screen.css"
import {useSelector} from 'react-redux'
function Screen() {
  const input = useSelector(state => state.input.value)
  return (
    <div className='screen'>
    {input}
    </div>
  )
}

export default Screen
