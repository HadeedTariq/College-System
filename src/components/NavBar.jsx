import { useNavigate } from 'react-router-dom'
import '../css/NavBar.css'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { useStore } from '../context/store'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { stateType } from '../context/reducer'
const NavBar = () => {
  const navigate = useNavigate()
  const navigator = (url) => {
    navigate(url)
  }
  const [{ GoogleUser, EmailUser,mode }, dispatch] = useStore()
  const logOut = async () => {
    await signOut(auth)
    localStorage.removeItem('email-user')
    localStorage.removeItem('google-user')
    dispatch({ type: stateType.EUSER, user: null })
    dispatch({ type: stateType.GUSER, user: null })
  }
  const changeMode=(mode)=>{
    dispatch({type:stateType.SETMODE,mode:mode})
  }
  return (
    <>
      <div className="nav-bar">
        <nav className="nav">
          <h1>Itians</h1>
          <ul className="ul">
            <li onClick={()=>navigator('/')}>Home</li>
            <li>Budget</li>
            <li>Chat</li>
            <li>Notes</li>
            <li>Todos</li>
          </ul>
          <div className="user-info">
            {
              !GoogleUser && !EmailUser ? (
                <button onClick={() => navigator('/signIn')}>Sign In</button>
              ) : (
                <>
                  <p>{GoogleUser.displayName || EmailUser.displayName}</p>
                  <button onClick={logOut}>SignOut</button>
                </>
              )
            }
            {mode.color === 'black' ? (
              <MdDarkMode size={27} cursor={'pointer'} className='mode'
                onClick={() => changeMode({ background: "linear-gradient(90deg, rgba(30,37,59,1) 0%, #130e1e 46%, rgba(28,37,70,1) 100%)", color: "white" })} />
            ) : (
              <MdLightMode size={27} cursor={'pointer'} className='mode'
                onClick={() => changeMode({ background: "linear-gradient(90deg, rgba(210,210,210,1) 0%, rgba(210,208,214,1) 46%, rgba(191,191,191,1) 100%)", color: "black" })} />
            )
            }
          </div>
        </nav>
      </div>
    </>
  )
}

export default NavBar