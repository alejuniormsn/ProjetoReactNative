import styled from 'styled-components/native';
import {theme} from '../../themes/themes';
import {Icon} from '../icon/icon';

export const ModalContainer = styled.View`
  position: absolute;
  padding: 20px;
  margin: 8px;
  bottom: 0;
  height: 200px;
  z-index: 9;
  border-width: 2px;
  border-radius: 16px;
  border-color: ${theme.colors.gray80};
  background-color: ${theme.colors.white};
`;

export const IconClose = styled(Icon)`
  position: absolute;
  right: 24px;
  top: 24px;
  z-index: 10;
`;
