import styled from 'styled-components';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

export const CartIconContainer = styled.div`
  width: 45px;
  min-width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIconContainer = styled(ShoppingIcon)`
  width: 80%;
  height: 90%;
`;

export const TextCount = styled.span`
  position: absolute;
  font-size: 1rem;
  font-weight: bold;
  bottom: 8px;
  color: white;
`;
