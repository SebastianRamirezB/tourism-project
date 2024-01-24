import validator from 'validator';

export const registerFormValidator = (fullName, email, password, confirmPassword) => {
  const errorMessages = [];

  if (validator.isEmpty(fullName)) {
    errorMessages.push('El campo de nombre no puede estar vacío');
  }

  if (!validator.isEmail(email)) {
    errorMessages.push('Debe ser un email válido');
  }

  if (validator.isEmpty(password)) {
    errorMessages.push('El campo de la contraseña no puede estar vacío');
  }

  if (!validator.equals(password, confirmPassword)) {
    errorMessages.push('Las contraseñas deben ser iguales');
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
