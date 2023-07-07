import { createSlice} from '@reduxjs/toolkit'

export const themeSlice = createSlice({
    name : "theme",
    initialState : {value : 1},
    reducers : {
        changeTheme(state) {
            if(state.value >= 3){
                state.value = 1
            }else{
                state.value += 1
            }
            
        }
    }
})

export const {changeTheme} = themeSlice.actions