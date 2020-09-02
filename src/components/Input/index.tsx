import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Container, Error } from './styles';
/** extender as propriedades de um Input tradicional */

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<
    IconBaseProps
  > /** recebe o componente como um propriedade e passa função que da acesso as propriedades do icone */;
}
/** sempre que alterar um estado, uma props e componnente pai a função sempre é renderizada(função sendo chamda de novo) */
const Input: React.FC<InputProps> = (
  {
    name,
    icon: Icon,
    ...rest
  } /** usando spred e passando todos as propriedades para a tag input */,
) => {
  // ter acesso ao elemento do input na Dom, e recebendo como parametro a referencia de um input (<HTMLInputElement>) //
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  // fazer um resgitro assim que o input for exibido em tela//
  const { registerField, error, defaultValue, fieldName } = useField(name);
  /** função que executa so uma vez e so altera se o que tem dentro do array for mudado(usar sempre que tiver uma funçãod entro de um componente) */
  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    /** se o inputref tiver um valor vai retornar true se nao tiver coloca como false */
    setIsFilled(!!inputRef.current?.value);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  // assim que o componente for exibido em tela eu vou chamar a função registerField //
  useEffect(() => {
    /** função recebendo propriedades */
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
      {Icon && <Icon size={20} />}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  );
};

export default Input;
