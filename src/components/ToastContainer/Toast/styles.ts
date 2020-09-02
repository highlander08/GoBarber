import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ContainerProps {
  type?: 'info' | 'success' | 'error';
  hasDescription: boolean;
}

const toastTypeVariations = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `,
};

export const Container = styled(animated.div)<ContainerProps>`
  width: 360px; /**para ter um width fixo */

  position: relative; /**está posicionado em relação à sua posição normal. */
  /* define uma a distância entre o conteúdo de um elemento e suas bordas. */
  padding: 16px 30px 16px 16px; /** 16 á e 30 é a direita */
  border-radius: 10px;
  /**preto com 20% de opacidade */
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

  display: flex;

  /**aplicar margin top ao segundo toast da lista de toast */
  & + div {
    margin-top: 8px;
  }
  ${(props) => toastTypeVariations[props.type || 'info']}

  /**svg(icone) que esta diretamente dento do toast */
  > svg {
    /**top e a direita */
    margin: 4px 12px 0 0;
  }
  div {
    flex: 1; /**ocupar o maximo do tamanho possivel */

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px; /**aumentar o texto */
    }
  }
  button {
    position: absolute;
    right: 16px;
    top: 19px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit; /**pega color que esta sendo utilizado no container e envia a direita */
  }
  /**pego as propriedades do toast e se nao tiver descrição eu aplico um css */
  ${(props) =>
    !props.hasDescription &&
    css`
      align-items: center;

      svg {
        margin: 0;
      }
    `}
`;
