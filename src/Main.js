import React from 'react'
import "./Main.css"
import { useDispatch } from 'react-redux'
import { addToScreen, deleteFromScreen, evaluate, Rest } from './features/counter/inputSlice';
function Main() {
  const dispatch = useDispatch()
  const handlClick = (e) => {
    let element = e.target.textContent
    if(element === "DEL"){
      dispatch(deleteFromScreen())
    }else if(element === "REST") {
      dispatch(Rest())
    }else if(element === "="){
      dispatch(evaluate())
    }else if(element !== "=" || element !== "Del" || element !== "REST" ){
      dispatch(addToScreen(e.target.textContent))
    }
       
  }
  return (
    <div onClick={handlClick} className='main'>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span className='delete'>DEL</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span >+</span>
        <span >1</span>
        <span >2</span>
        <span >3</span>
        <span  className='subtract'>-</span>
        <span >.</span>
        <span >0</span>
        <span className='divide'>/</span>
        <span  >×</span>
        <span className='rest'>REST</span>
        <span  className='equal'>=</span>

    </div>
  )
}

export default Main
