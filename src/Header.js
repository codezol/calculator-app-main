import React from 'react'
import "./Header.css"
import { useSelector, useDispatch } from 'react-redux'
import { changeTheme } from './features/themeSlice'
function Header() {
  const theme = useSelector(state => state.theme.value)
  const dispatch = useDispatch()
  const handelThemeChange = () => {
    dispatch(changeTheme())
  }
 
  return (
    <header>
     <h3>calc</h3>
     <div className="theme__container">
        <p>THEME</p>
        <div className="theme">
            <div className="theme__number">
                <span>1</span>
                <span>2</span>
                <span>3</span>
            </div>
            <div className={`theme__ballContainer ball-position-${theme}`} onClick={handelThemeChange}>
                <div className="theme__ball" ></div>
            </div>
        </div>
     </div>
    </header>
  )
}

export default Header
