import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Components/Login.css'

const LoginPage = () => {
  const [showWelcome, setShowWelcome] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

 
  const CORRECT_USERNAME = 'hima'
  const CORRECT_PASSWORD = 'c2c1234'

  useEffect(() => {
    const wrapper = document.querySelector('.wrapper')
    const registerLink = document.querySelector('.register-link')
    const loginLink = document.querySelector('.login-link')

    const handleRegister = () => wrapper.classList.add('active')
    const handleLogin = () => wrapper.classList.remove('active')

    registerLink.addEventListener('click', handleRegister)
    loginLink.addEventListener('click', handleLogin)

    return () => {
      registerLink.removeEventListener('click', handleRegister)
      loginLink.removeEventListener('click', handleLogin)
    }
  }, [])

  function handleLogin(e) {
    e.preventDefault()
    if (username === CORRECT_USERNAME && password === CORRECT_PASSWORD) {
      setShowWelcome(true)
      setTimeout(() => {
        setShowWelcome(false)
        navigate('/profile')
      }, 2500)
    } else {
      alert('يوزر نيم أو باسورد غلط!')
    }
  }

  return (
    <div className="wrapper">

      {}
      {showWelcome && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#c2ff40',
          color: '#1a1a1a',
          padding: '2rem 3rem',
          borderRadius: '12px',
          fontSize: '1.5rem',
          fontWeight: '800',
          zIndex: 9999,
          textAlign: 'center',
          boxShadow: '0 0 30px rgba(0,0,0,0.3)',
          animation: 'fadeIn 0.3s ease'
        }}>
          🏆 Welcome Back, {username}!
        </div>
      )}

      <span className="rotate-bg"></span>
      <span className="rotate-bg2"></span>

      {}
      <div className="form-box login">
        <h2 className="title animation" style={{"--i": 0, "--j": 21}}>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-box animation" style={{"--i": 1, "--j": 22}}>
            <input 
              type="text" 
              required 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label>Username</label>
            <i className='bx bxs-user'></i>
          </div>
          <div className="input-box animation" style={{"--i": 2, "--j": 23}}>
            <input 
              type="password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
            <i className='bx bxs-lock-alt'></i>
          </div>
          <button type="submit" className="btn animation" style={{"--i": 3, "--j": 24}}>
            ENTER THE ARENA
          </button>
          <div className="linkTxt animation" style={{"--i": 5, "--j": 25}}>
            <p>New Champion? <a href="#" className="register-link">Sign Up</a></p>
          </div>
        </form>
      </div>

      {}
      <div className="info-text login">
        <h2 className="animation" style={{"--i": 0, "--j": 20}}>WELCOME <br />CHAMPIONS</h2>
        <p className="animation" style={{"--i": 1, "--j": 21}}>
          Your ultimate fitness journey begins here. Elevate your potential.
        </p>
      </div>

      {}
      <div className="form-box register">
        <h2 className="title animation" style={{"--i": 17, "--j": 0}}>Sign Up</h2>
        <form action="#">
          <div className="input-box animation" style={{"--i": 18, "--j": 1}}>
            <input type="text" required />
            <label>Username</label>
            <i className='bx bxs-user'></i>
          </div>
          <div className="input-box animation" style={{"--i": 19, "--j": 2}}>
            <input type="email" required />
            <label>Email</label>
            <i className='bx bxs-envelope'></i>
          </div>
          <div className="input-box animation" style={{"--i": 20, "--j": 3}}>
            <input type="password" required />
            <label>Password</label>
            <i className='bx bxs-lock-alt'></i>
          </div>
          <button type="submit" className="btn animation" style={{"--i": 21, "--j": 4}}>
            JOIN THE ELITE
          </button>
          <div className="linkTxt animation" style={{"--i": 22, "--j": 5}}>
            <p>Already a member? <a href="#" className="login-link">Login</a></p>
          </div>
        </form>
      </div>

      {}
      <div className="info-text register">
        <h2 className="animation" style={{"--i": 17, "--j": 0}}>BECOME <br />LEGENDARY</h2>
        <p className="animation" style={{"--i": 18, "--j": 1}}>
          The journey to greatness starts with one step. Register now.
        </p>
      </div>
    </div>
  )
}

export default LoginPage