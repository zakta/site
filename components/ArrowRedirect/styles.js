import styled, { keyframes } from 'styled-components';
import { BsArrowDownRight } from 'react-icons/bs';

const bounce = keyframes`
  0%{
    top: 0;
  }
  50%{
    top: -20px;
  }
  70%{
    top: -10px;
  }
  100%{
    top: 0;
  }
`;

const ArrowIcon = styled(BsArrowDownRight)`
  align-self: flex-start;
  animation: ${bounce} 1s linear infinite;
  color: white;
  font-size: 40px;
  opacity: .75;
  position: relative;
  right: .6rem;
  transform: rotate(45deg);
  transition: all .15s ease;

&:active {
  opacity: 1;
}

@media (min-width: 450px) {
  font-size: 45px;
}

@media (min-width: 768px) {
  font-size: 50px;

  &:hover {
    opacity: 1;
  }
}
`;

export default ArrowIcon;
