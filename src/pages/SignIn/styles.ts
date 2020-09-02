import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh; /** ocupar 100 da tela*/

  display: flex; /**um do lado do outro */
  align-items: stretch; /**deixar os itens do tamanho total da pagina */
`;

export const Content = styled.div`
  display: flex; /**um do lado do outro */
  flex-direction: column; /**deixa em colunas */
  align-items: center; /**centralizar */
  justify-content: center; /**alinhar ao centro */

  width: 100%; /**ocupar o maximo da tela possivel */
  max-width: 700px; /**determinando o maximo possivel */
`;

const appearFromLeft = keyframes`
from {
  opacity: 0;
  transform: translateX(-50px);
}
to {
  opacity: 1;
  transform: translateX(0)
}
`;

export const AnimationContainer = styled.div`
  display: flex; /**um do lado do outro */
  flex-direction: column; /**deixa em colunas */
  align-items: center; /**centralizar */
  justify-content: center; /**alinhar ao centro */

  animation: ${appearFromLeft} 1s;

  form {
    margin: 80px 0; /**distanciar em cima e em baixo */
    width: 340px; /**ficar um pouco menor */
    text-align: center; /**alinhar texto no centro */

    h1 {
      margin-bottom: 24px; /**dsitanciar */
    }

    a {
      color: #f4ede8;
      display: block; /**Ele começa em uma nova linha, e ocupa toda a largura em formato de bloco */
      margin-top: 24px;
      text-decoration: none; /**tirar sublinhado ou bolinha */
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    /**estilizar apenas as ancoras/link de outro nivel dentro do content */
    color: #ff9000;
    display: block; /**Ele começa em uma nova linha, e ocupa toda a largura em formato de bloco */
    margin-top: 24px;
    text-decoration: none; /**tirar sublinhado ou bolinha */
    transition: color 0.2s;

    display: flex; /**alinhar icone com oo texto  */
    align-items: center; /**alinhar icone com oo texto  */

    svg {
      margin-right: 16px; /**distanciar o icone do texto */
    }
    &:hover {
      color: ${shade(0.2, '#ff9000')}; /**escurecer 20% da cor  */
    }
  }
`;

export const Background = styled.div`
  flex: 1; /**ocupa todo o espaço, menos o 700px a cima */
  background: url(${signInBackgroundImg}) no-repeat center; /**adicionar a imagem */
  background-size: cover; /**cobrir o tamanho que esta sobrando na tela  */
`;
