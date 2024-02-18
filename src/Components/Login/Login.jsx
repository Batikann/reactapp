import './style.scss'
import PasswordInput from '../PasswordInput/PasswordInput'
import { useState } from 'react'
import { toast } from 'react-toastify'

const initialState = {
  fullName: '',
  password: '',
}

export default function Login() {
  const [formData, setformData] = useState(initialState)
  const { fullName, password } = formData
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setformData({ ...formData, [name]: value })
  }

  const loginHandler = async (e) => {
    e.preventDefault()
    if (!fullName || !password) {
      return toast.error('Tüm alanlar zorunludur!')
    }
    const userData = {
      fullName,
      password,
    }
    console.log(userData)
    // await dispatch(login(userData))
  }
  return (
    <div id="login">
      <div className="signup-headerbox">
        <h3>Login</h3>
        <h6>Sign in to continue</h6>
      </div>
      <form onSubmit={loginHandler}>
        <label htmlFor="name">
          <span>Name</span>
          <input
            type="text"
            className="textInput"
            placeholder="Terry A. Davis"
            name="fullName"
            value={fullName}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="password">
          <span>Password</span>
          <PasswordInput
            className="textInput"
            placeholder="********"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
          <a>Forgot Password?</a>
        </label>
        <input type="submit" className="submitButton" value="Login" />
      </form>
      <a href="/signup">Hesabın yok mu? Buradan Kayıt Ol</a>
    </div>
  )
}
