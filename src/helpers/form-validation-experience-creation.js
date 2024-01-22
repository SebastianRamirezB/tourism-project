import validator from 'validator';

export const experienceCreationFormValidator = (title, description, email, tel, whatsappNumber, country, department, town, address, facebookTag, instagramTag, twitterTag) => {
  const errorMessages = [];

  if (validator.isEmpty(title)) {
    errorMessages.push('El campo de titulo no puede estar vacío');
  }

  if (validator.isEmpty(description)) {
    errorMessages.push('El campo de descripcion no puede estar vacío');
  }

  if (!validator.isEmail(email)) {
    errorMessages.push('Debe ser un email válido');
  }

  if (validator.isEmpty(tel)) {
    errorMessages.push('El campo  telefono no puede estar vacío');
  }

  if (validator.isEmpty(whatsappNumber)) {
    errorMessages.push('El campo  whatsApp no puede estar vacío');
  }

  if (validator.isEmpty(country)) {
    errorMessages.push('El campo pais no puede estar vacío');
  }

  if (validator.isEmpty(department)) {
    errorMessages.push('El campo departamento no puede estar vacío');
  }
  if (validator.isEmpty(town)) {
    errorMessages.push('El campo ciudad no puede estar vacío');
  }
  if (validator.isEmpty(address)) {
    errorMessages.push('El campo de la dirección no puede estar vacío');
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
