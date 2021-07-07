import styled from 'styled-components';
import {
  BLUE,
  GRAY_3,
  LIGHT_GRAY,
  SHADOW_BIG,
  SHADOW_SMALL,
  TRANSITION,
  VIOLET,
} from '../../../constants/variables';

export const Rating = styled.div`
  span {
    color: ${BLUE};
    font-weight: bold;
  }
`;
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  border-radius: 16px;
  overflow: hidden;
`;
export const StyledImage = styled.img`
  max-width: 100%;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  max-height: 100%;
  object-fit: cover;
`;
export const Title = styled.h6`
  margin-top: 16px;
`;
export const LikeButton = styled.button`
  background: none;
  outline: none;
  border: none;
  display: flex;
  font-weight: bold;
  color: ${GRAY_3};
  cursor: pointer;
  svg {
    margin-right: 6px;
  }
`;
export const Card = styled.a`
  color: unset;
  display: block;
  background: #ffffff;
  border-radius: 16px;
  padding: 16px 16px 20px;
  transition: 0.2s ease-out;
  text-decoration: none;
  transition: ${TRANSITION};
  position: relative;
  box-shadow: 0 0 0 transparent, 0 0 0 2px ${LIGHT_GRAY};
  &:hover {
    transform: scale(1.025);
    box-shadow: ${SHADOW_BIG()}, 0 0 0 4px ${VIOLET};
  }
  &:active {
    transform: scale(0.95);
    box-shadow: ${SHADOW_SMALL()};
  }
`;
