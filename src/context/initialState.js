const googleUser=JSON.parse(localStorage.getItem('google-user'))
const emailUser=JSON.parse(localStorage.getItem('email-user'))
export const initialState={
    GoogleUser:googleUser?googleUser:null,
    EmailUser:emailUser?emailUser:null,
    mode:{
        background: "linear-gradient(90deg, rgba(210,210,210,1) 0%, rgba(210,208,214,1) 46%, rgba(191,191,191,1) 100%)",
        color:"black"
    }
}