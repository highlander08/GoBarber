import styled from 'styled-components';

export const Container = styled.div`
  position: relative; /**todo position absolute dentro do container, vai ser relativo ao container e nao ao restante da tela  */

  span {
    width: 160px;
    background: #ff9000;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4;
    visibility: hidden; /**esconde o elemento da nossa dom enquanto ele nao tiver disponivel pra ser vistofor visto */

    position: absolute;
    bottom: calc(100% + 12px); /**deixa um pouco a cima linha do top do icone */
    left: 50%; /**centralizar */
    transform: translateX(-50%); /**centralizar */

    color: #312e38;

    &::before {
      content: ''; /**exibir em tela */
      border-style: solid; /** hack de uma flexinha no tooltip */
      border-color: #ff9000 transparent; /**deixar a flexinha */
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%; /**centralizar */
      transform: translateX(-50%); /**centralizar */
    }
  }
  /*ao passar o mouse no span ele aparece o erro*/
  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
