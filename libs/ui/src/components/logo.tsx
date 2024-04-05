import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LogoImage from '../assets/layers.svg';

type LogoProps = {
  url: string;
  width?: number;
  height?: number;
};

function Logo({ url, width = 146, height = 48 }: LogoProps) {
  return (
    <Container $width={width} $height={height}>
      <Link to={url}>
        <LogoImage />
      </Link>
    </Container>
  );
}

const Container = styled.div<{ $width: number; $height: number }>`
  display: flex;
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export default Logo;
