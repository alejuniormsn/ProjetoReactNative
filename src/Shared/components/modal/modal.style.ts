import styled from 'styled-components/native';
import {theme} from '../../themes/themes';
import {Icon} from '../icon/icon';

export const ModalContainer = styled.View`
  position: absolute;
  padding: 16px;
  margin: 8px;
  bottom: 0;
  height: 200px;
  z-index: 9;
  border-width: 2px;
  border-radius: 16px;
  border-color: ${theme.colors.grayTheme.gray80};
  background-color: ${theme.colors.neutralTheme.white};
`;

export const IconCloseModal = styled(Icon)`
  position: absolute;
  right: 24px;
  top: 24px;
  z-index: 10;
`;
