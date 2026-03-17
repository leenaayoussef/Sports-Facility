import { createContext, useState, useEffect } from 'react'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [users, setUsers] = useState([])

  // تحميل البيانات من localStorage عند البدء
  useEffect(() => {
    const storedUsers = localStorage.getItem('users')
    const currentUser = localStorage.getItem('currentUser')
    
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers))
    }
    if (currentUser) {
      setUser(JSON.parse(currentUser))
    }
  }, [])

  // تسجيل مستخدم جديد
  const signup = (username, email, password) => {
    const userExists = users.some(u => u.email === email || u.username === username)
    
    if (userExists) {
      return { success: false, message: 'User already exists' }
    }

    const newUser = {
      id: Date.now(),
      username,
      email,
      password, // تحذير: في التطبيق الفعلي، استخدم hashing
      profileImage: null,
      createdAt: new Date().toISOString()
    }

    const updatedUsers = [...users, newUser]
    setUsers(updatedUsers)
    localStorage.setItem('users', JSON.stringify(updatedUsers))

    return { success: true, message: 'Registration successful' }
  }

  // تسجيل الدخول
  const login = (email, password) => {
    const foundUser = users.find(u => u.email === email && u.password === password)
    
    if (!foundUser) {
      return { success: false, message: 'The Username or password is Wrong' }
    }

    setUser(foundUser)
    localStorage.setItem('currentUser', JSON.stringify(foundUser))

    return { success: true, message: 'Login successful' }
  }

  // تعديل بيانات المستخدم
  const updateUser = (updatedData) => {
    const updatedUser = { ...user, ...updatedData }
    setUser(updatedUser)
    localStorage.setItem('currentUser', JSON.stringify(updatedUser))

    // تحديث المستخدم في قائمة المستخدمين
    const updatedUsers = users.map(u => u.id === user.id ? updatedUser : u)
    setUsers(updatedUsers)
    localStorage.setItem('users', JSON.stringify(updatedUsers))
  }

  // تسجيل الخروج
  const logout = () => {
    setUser(null)
    localStorage.removeItem('currentUser')
  }

  return (
    <UserContext.Provider value={{ user, users, signup, login, logout, updateUser }}>
      {children}
    </UserContext.Provider>
  )
}
