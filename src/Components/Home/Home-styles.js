// Home styles
import styled from 'styled-components';
import { breakpoints } from '../../breakpoints';

import MainButton from '../MainButton';

export const HomeDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 12rem;
`;

export const Welcome = styled.div`
  grid-area: phrase;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 7rem;
`;

export const WelcomeText = styled.h2`
  text-align: center;
  font-family: var(--font-display);
  font-size: 8rem;
  color: var(--color-text);
  letter-spacing: 0.2rem;
  margin-bottom: 4rem;
  opacity: ${({ state }) => (state === 'entered' ? 1 : 0)};
  transform: ${({ state }) =>
    state === 'entered' ? 'translateY(0rem)' : 'translateY(-3rem)'};
  transition: all 1s;

  @media ${breakpoints.phoneSm.width} {
    margin: 3rem 0 2rem 0;
    font-size: 6rem;
  }
`;

export const WelcomeButton = styled(MainButton)`
  opacity: ${({ state }) => (state === 'entered' ? 0.8 : 0)};
  transform: ${({ state }) =>
    state === 'entered' ? 'translateY(0rem)' : 'translateY(3rem)'};
  transition: all 1s;
`;
