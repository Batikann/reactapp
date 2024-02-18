import { useState } from 'react'
import './style.scss'
import PasswordInput from '../PasswordInput/PasswordInput'
import { validateEmail } from '../../utils/validateEmail'
import { toast } from 'react-toastify'

const initialState = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

export default function SignUp() {
  const [formData, setformData] = useState(initialState)
  const { fullName, email, password, confirmPassword } = formData

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setformData({ ...formData, [name]: value })
  }

  const registerUser = async (e) => {
    e.preventDefault()

    if (!fullName || !email || !password) {
      return toast.error('All fields are required')
    }
    if (password.length < 6) {
      return toast.error('Passwords must be up to 6 characters')
    }
    if (!validateEmail(email)) {
      return toast.error('Please enter a valid email')
    }

    if (confirmPassword !== password) {
      return toast.error('Passwords not matched')
    }

    const userData = {
      fullName,
      email,
      password,
    }
    console.log(userData)

    // await dispatch(register(userData))
    // await dispatch(sendVerificationEmail())
  }
  return (
    <div id="signup">
      <div className="signup-headerbox">
        <h3>Sign Up</h3>
        <h6>Create new account</h6>
      </div>
      <form onSubmit={registerUser}>
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
        <label htmlFor="email">
          <span>Email</span>
          <input
            type="text"
            className="textInput"
            placeholder="example@email.org"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="password" class="password">
          <span>Password</span>
          <PasswordInput
            name="password"
            value={password}
            className="passwordInput"
            placeholder="********"
            onChange={handleInputChange}
          ></PasswordInput>
        </label>
        <label htmlFor="confirmPassword" class="password">
          <span>Confirm your password here</span>
          <PasswordInput
            name="confirmPassword"
            className="passwordInput"
            value={confirmPassword}
            placeholder="********"
            onChange={handleInputChange}
          ></PasswordInput>
        </label>
        <input type="submit" className="submitButton" value="Sign Up" />
      </form>
    </div>
  )
}
