import './style.scss'
import { useState } from 'react'

export default function PasswordInput(data) {
  const [visiblityStatus, setVisibilityStatus] = useState(false)

  return (
    <div className="password-input">
      <input
        type={visiblityStatus ? 'text' : 'password'}
        name={data.name}
        className={data.className}
        placeholder={data.placeholder}
        value={data.value}
        onChange={data.onChange}
      />
      <i
        class={visiblityStatus ? 'visibility-on' : 'visibility-off'}
        onClick={(e) => setVisibilityStatus(!visiblityStatus)}
      ></i>
    </div>
  )
}
