
export const BlogView = (state = {} , action) => {

    switch(action.type){
        case "AddView" :
            if(state[action.index] == undefined){
                return {
                    ...state,
                    [action.index]: {
                        ...state[action.index],
                        views: 1
                    }
                }
            }
                return {
                    ...state,
                    [action.index]: {
                        ...state[action.index],
                        views: state[action.index].views + 1
                    }
                }

        default:
            return state; 
    }

}

