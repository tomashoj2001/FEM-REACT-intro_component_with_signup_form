import { useState } from 'react';

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})

  const handleChange = e => {
    const {name, value} = e.target

    setForm({
      ...form,
      [name]: value
    })
  }

  const handleBlur = e => {
    handleChange(e)
    setErrors(validateForm(form))
  }

  const handleSubmit = e => {
    e.preventDefault()

    setErrors(validateForm(form))
    if (errors.length === undefined) setForm(initialForm)
  }

  return { form, errors, handleChange, handleBlur, handleSubmit }
}