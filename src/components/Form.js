import { useForm } from "../hooks/useForm"
import logoError from "../assets/images/icon-error.svg"

const initialForm = {
  name: "",
  last_name: "",
  email: "",
  password: ""
}

const validationsForm = (form) => {
  let errors = {}
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/
  let regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}$/


  if (!form.name.trim()) {
    errors.name = "First Name cannot be empty"
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "First Name only accepts letters and white spaces"
  }

  if (!form.last_name.trim()) {
    errors.last_name = "First Name cannot be empty"
  } else if (!regexName.test(form.last_name.trim())) {
    errors.last_name = "Last Name only accepts letters and white spaces"
  }

  if (!form.email.trim()) {
    errors.email = "Email cannot be empty"
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "Looks like this is not an email"
  }

  if (!form.password.trim()) {
    errors.password = "Password cannot be empty"
  } else if (!regexPassword.test(form.password.trim())) {
    errors.password = "Password should contain more than 4 caracters and include at least one uppercase letter, one lowercase letter and one number"
  }

  return errors
}

let styles = {
  borderColor: "hsl(0, 100%, 74%)",
}

export default function Form () {
  const {
    form, 
    errors, 
    handleChange, 
    handleBlur, 
    handleSubmit
  } = useForm(initialForm, validationsForm)

  return(
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="name" 
        placeholder="First Name"
        onChange={handleChange}
        onBlur={handleBlur}
        value={form.name}
        style={errors.name && styles}
        required
      />
      {errors.name && <img src={logoError} alt="logo error"/>}
      {errors.name && <p className="error">{errors.name}</p>}

      <input 
        type="text" 
        name="last_name" 
        placeholder="Last Name"
        onChange={handleChange}
        onBlur={handleBlur}
        value={form.last_name}
        style={errors.last_name && styles}
        required
      />
      {errors.last_name && <img src={logoError} alt="logo error"/>}
      {errors.last_name && <p className="error">{errors.last_name}</p>}

      <input 
        type="email" 
        name="email" 
        placeholder="Email Address"
        onChange={handleChange}
        onBlur={handleBlur}
        value={form.email}
        style={errors.email && styles}
        required
      />
      {errors.email && <img src={logoError} alt="logo error"/>}
      {errors.email && <p className="error">{errors.email}</p>}

      <input 
        type="password" 
        name="password" 
        placeholder="Password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={form.password}
        style={errors.password && styles}
        required
      />
      {errors.password && <img src={logoError} alt="logo error"/>}
      {errors.password && <p className="error">{errors.password}</p>}

      <input
        type="submit"
        value={"CLAIM YOUR FREE TRIAL"}
        onClick={handleSubmit}
      />

      <p className="terms">
        By clicking the button, you are agreeing to our <span>Terms and Services</span>
      </p>
    </form>
  )
}