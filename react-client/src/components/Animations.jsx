import styled, { keyframes } from 'styled-components';

export const flipRight = keyframes`
  0% {
    transform: rotateY(100deg);
    transform-origin: left;
    opacity: 0;
  }
  100% {
    transform: rotateY(0);
    transform-origin: left;
    opacity: 1;
  }
`;

export const flipLeft = keyframes`
  0% {
    transform: rotateY(0);
    transform-origin: left;
    opacity: 1;
  }
  100% {
    transform: rotateY(100deg);
    transform-origin: left;
    opacity: 0;
  }
`;

export const fadeInBottom = keyframes`
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;