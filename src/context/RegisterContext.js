import React from 'react'

const RegisterContext = React.createContext({
  isRegister: false,
  changeRegistrationStatus: () => {},
  name: '',
  topic: '',
  updatedName: () => {},
  updatedTopic: () => {},
  registerError: false,
  updateError: () => {},
})

export default RegisterContext
