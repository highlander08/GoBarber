import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #ff9000;
  height: 50px; /** altura da área do conteúdo de um elemento. */
  border-radius: 10px;
  border: 0;
  padding: 0 16px; /**altura apenas nas laterais  */
  color: #312e38;
  width: 100%; /**largura */
  font-weight: 500; /**negrito */
  margin-top: 16px; /**distanciar do topo */
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#ff9000')}; /**escurecer 20% da cor  */
  }
`;
