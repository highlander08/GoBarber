import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

/** extender as propriedades de um Button tradicional */
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
/** pegar o texto dentro do butao usando children */
const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);

export default Button;
