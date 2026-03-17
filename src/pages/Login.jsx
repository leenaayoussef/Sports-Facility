import { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'
import '../Components/Login.css'

const LoginPage = () => {
  const [showWelcome, setShowWelcome] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { login, signup, user } = useContext(UserContext)

  // إذا كان المستخدم مسجل بالفعل، انقله للصفحة الرئيسية
  useEffect(() => {
    if (user) {
      navigate('/profile')
    }
  }, [user, navigate])

  useEffect(() => {
    const wrapper = document.querySelector('.wrapper')
    const registerLink = document.querySelector('.register-link')
    const loginLink = document.querySelector('.login-link')

    const handleRegister = () => {
      wrapper.classList.add('active')
      setIsLogin(false)
    }
    const handleLogin = () => {
      wrapper.classList.remove('active')
      setIsLogin(true)
    }

    registerLink?.addEventListener('click', handleRegister)
    loginLink?.addEventListener('click', handleLogin)

    return () => {
      registerLink?.removeEventListener('click', handleRegister)
      loginLink?.removeEventListener('click', handleLogin)
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    setError('')
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    const result = login(formData.email, formData.password)
    
    if (result.success) {
      setShowWelcome(true)
      setTimeout(() => {
        setShowWelcome(false)
        navigate('/profile')
      }, 2500)
    } else {
      setError(result.message)
    }
  }

  const handleSignupSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.username || !formData.email || !formData.password) {
      setError('Please fill in all fields')
      return
    }

    const result = signup(formData.username, formData.email, formData.password)
    
    if (result.success) {
      setShowWelcome(true)
      setTimeout(() => {
        setShowWelcome(false)
        setFormData({ username: '', email: '', password: '' })
        const wrapper = document.querySelector('.wrapper')
        wrapper.classList.remove('active')
        setIsLogin(true)
        setError('')
      }, 2500)
    } else {
      setError(result.message)
    }
  }

  return (
    <div className="wrapper">
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
          🏆 Welcome {formData.username || 'Welcome'}!
        </div>
      )}

      {error && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          backgroundColor: '#ff6b6b',
          color: '#ffffff',
          padding: '1rem 1.5rem',
          borderRadius: '8px',
          zIndex: 9998
        }}>
          {error}
        </div>
      )}

      <span className="rotate-bg"></span>
      <span className="rotate-bg2"></span>

      {/* Login Form */}
      <div className="form-box login">
        <h2 className="title animation" style={{"--i": 0, "--j": 21}}>Login</h2>
        <form onSubmit={handleLoginSubmit}>
          <div className="input-box animation" style={{"--i": 1, "--j": 22}}>
            <input 
              type="email" 
              name="email"
              required 
              value={formData.email}
              onChange={handleChange}
            />
            <label>Email</label>
            <i className='bx bxs-envelope'></i>
          </div>
          <div className="input-box animation" style={{"--i": 2, "--j": 23}}>
            <input 
              type="password"
              name="password" 
              required 
              value={formData.password}
              onChange={handleChange}
            />
            <label>Password</label>
            <i className='bx bxs-lock-alt'></i>
          </div>
          <button type="submit" className="btn animation" style={{"--i": 3, "--j": 24}}>
            ENTER THE ARENA
          </button>
          <div className="linkTxt animation" style={{"--i": 5, "--j": 25}}>
            <p>Don't have an account?<a href="#" className="register-link">Create Account</a></p>
          </div>
        </form>
      </div>

      {/* Login Info */}
      <div className="info-text login">
        <h2 className="animation" style={{"--i": 0, "--j": 20}}>WELCOME <br />CHAMPIONS</h2>
        <p className="animation" style={{"--i": 1, "--j": 21}}>
          Your ultimate fitness journey begins here. Elevate your potential.
        </p>
      </div>

      {/* Sign Up Form */}
      <div className="form-box register">
        <h2 className="title animation" style={{"--i": 17, "--j": 0}}>Sign Up</h2>
        <form onSubmit={handleSignupSubmit}>
          <div className="input-box animation" style={{"--i": 18, "--j": 1}}>
            <input 
              type="text" 
              name="username"
              required 
              value={formData.username}
              onChange={handleChange}
            />
            <label>Username</label>
            <i className='bx bxs-user'></i>
          </div>
          <div className="input-box animation" style={{"--i": 19, "--j": 2}}>
            <input 
              type="email" 
              name="email"
              required 
              value={formData.email}
              onChange={handleChange}
            />
            <label>Email</label>
            <i className='bx bxs-envelope'></i>
          </div>
          <div className="input-box animation" style={{"--i": 20, "--j": 3}}>
            <input 
              type="password" 
              name="password"
              required 
              value={formData.password}
              onChange={handleChange}
            />
            <label>Password</label>
            <i className='bx bxs-lock-alt'></i>
          </div>
          <button type="submit" className="btn animation" style={{"--i": 21, "--j": 4}}>
            JOIN THE ELITE
          </button>
          <div className="linkTxt animation" style={{"--i": 22, "--j": 5}}>
            <p>Already have an account?<a href="#" className="login-link">Login</a></p>
          </div>
        </form>
      </div>

      {/* Sign Up Info */}
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