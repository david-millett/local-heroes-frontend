import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signin } from '../../services/userService'

import Errors from '../../components/Errors/Errors'

const SignIn = ({ setUser }) => {

  // ! State
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  // ! Location variables
  const navigate = useNavigate()

  //Errors State - for storing erros to use in error handling
  const [errors, setErrors] = useState('')

  // ! Event Handlers
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { user } = await signin(formData) // sign in
      setUser(user) // set user to state
      navigate('/') // navigate to dashboard
    } catch (error) {
      console.log(error.response.data.errorMessage)
      setErrors(error.response.data.errorMessage)
    }
  }

  return (
    <main>
      <section>
      <h1>Log in</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="name"
              value={formData.username}
              name="username"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              name="password"
              onChange={handleChange}
            />
          </div>
          <Errors message={errors} />
          <div>
            <button>Sign In</button>
            <Link to="/">
              <button>Cancel</button>
            </Link>
          </div>
        </form>
      </section>

    </main>
  )
}

export default SignIn