import styled from 'styled-components';
import { breakpoints } from '../breakpoints';
import BloodSpot from '../images/blood-spot.svg';

const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  margin-top: 0.5rem;

  @media ${breakpoints.phoneLand.height} {
    display: none;
  }
`;

const CounterText = styled.p`
  font-family: var(--font-display);
  font-size: 2.5rem;
  color: white;
  text-transform: uppercase;
  margin-top: 1.7rem;

  @media ${breakpoints.phoneSm.width} {
    font-size: 1.5rem;
    margin-top: 1.7rem;
  }
`;

const CounterNum = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10rem;
  width: 10rem;
  background-image: url(${BloodSpot});
  background-size: cover;
  background-repeat: no-repeat;

  @media ${breakpoints.phoneSm.width} {
    height: 8rem;
    width: 8rem;
  }
`;

const CounterTextNum = styled(CounterText)`
  font-size: 4.5rem;

  @media ${breakpoints.phoneSm.width} {
    font-size: 3rem;
  }
`;

const Counter = ({ wrongGuesses, state, maxErrors }) => {
  return (
    <CounterContainer state={state}>
      <CounterText className="counter">Guesses</CounterText>
      <CounterNum>
        <CounterTextNum className="counter">
          {maxErrors - wrongGuesses}
        </CounterTextNum>
      </CounterNum>
      <CounterText className="counter">remaining</CounterText>
    </CounterContainer>
  );
};

export default Counter;
