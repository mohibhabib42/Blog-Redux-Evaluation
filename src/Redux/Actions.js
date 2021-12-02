export const AddView =  (i) =>{

    return  (dispatch) => {
         dispatch({
            type:"AddView",
            index: i      
        })
    }

}