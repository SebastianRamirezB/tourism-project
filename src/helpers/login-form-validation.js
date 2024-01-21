import validator from 'validator';

export const loginFormValidator = (email, password) => {
  const errorMessages = [];

  if (!validator.isEmail(email)) {
    errorMessages.push('Debe ser un email válido');
  }

  if (validator.isEmpty(password)) {
    errorMessages.push('El campo de la contraseña no puede estar vacio');
  }

  if (errorMessages.length !== 0) {
    return {
      isValid: false,
      errorMessages
    };
  }

  return {
    isValid: true,
    errorMessages: []
  }; ;
};
