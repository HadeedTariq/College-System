export const stateType={
    GUSER:"G-User",
    EUSER:"E-User",
    SETMODE:"Set-Mode"
}
export const reducer=(state,action)=>{
    if(action.type===stateType.EUSER){
        return {
            ...state,
            EmailUser:action.user
        }
    }
    else if(action.type===stateType.GUSER){
        return {
            ...state,
            GoogleUser:action.user
        }
    }
    else if(action.type===stateType.SETMODE){
        return {
            ...state,
            mode:action.mode
        }
    }
}