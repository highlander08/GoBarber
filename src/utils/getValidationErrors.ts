import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}
export default function getValidationErrors(err: ValidationError): Errors {
  /** percorrendo os erros usando foreach e para cada erro eu pego a variavel cria uma propriedade com o nome path e o valor dela vai ser a mensagem */

  const validationErrors: Errors = {};

  err.inner.forEach((error) => {
    validationErrors[error.path] = error.message;
  });
  return validationErrors;
}
