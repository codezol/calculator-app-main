import { createSlice} from '@reduxjs/toolkit'

export const inputSlice = createSlice({
    name : "input",
    initialState : {value : ""},
    reducers : {
        addToScreen(state, actions){
            state.value += actions.payload
        },
        deleteFromScreen(state) {
            let num = state.value.split("");
            num.pop();
            state.value = num.join("")              
        },
        evaluate(state) {
            try{
                let  lastChr = state.value[state.value.length - 1];
                let firstChr = state.value[0]
               if(lastChr === "/" || lastChr === "×" ||lastChr === "+" ||lastChr === "-" ) return
               if(firstChr === "/" || firstChr === "×" ||firstChr === "+" ||firstChr === "-" ) return
               let input = state.value.split("").map(chr => {
                if(chr === "×"){
                    return "*";
                }else{
                    return chr
                }
               })
               
                    state.value = eval(input.join("")).toPrecision(2);
            }catch(err){
                console.log(err)
            }
                
                
        },
        Rest(state){
            state.value = ""
        }
    }
})

export const {addToScreen, deleteFromScreen, Rest, evaluate} = inputSlice.actions