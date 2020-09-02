import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

// interface para que o componente(Container) receba uma propriedade e nao der erro //
interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}
export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px; /**altura  */
  width: 100%; /**largura */

  border: 2px solid #232129;
  color: #666360;

  display: flex;
  align-items: center; /**alinhar ao centro */

  & + div {
    margin-top: 8px; /**distanciar os inputs um do outro */
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  /**acessar as propriedades do componente e quando isFocudes for true
  vamos colocar um css a mais*/
  ${(props) =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  input {
    flex: 1; /**ocupuar todo o espaço possivel */
    background: transparent;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px; /**distanciar a placeholder do icone email */
  }
`;
/** css aplicado no container do Tooltip  */
export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px; /**input nao chegar perto do error */
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    /**deixando  flexinha vermelha */

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
