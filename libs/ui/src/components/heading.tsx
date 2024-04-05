import React from 'react';
import styled, { css } from 'styled-components';
import { match } from 'ts-pattern';

type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type HeadingProps = {
  type: HeadingType;
  title: string;
};

function Heading({ type, title }: HeadingProps) {
  return (
    <Container>
      {match(type)
        .with('h1', () => <TitleH1>{title}</TitleH1>)
        .with('h2', () => <TitleH2>{title}</TitleH2>)
        .with('h3', () => <TitleH3>{title}</TitleH3>)
        .with('h4', () => <TitleH4>{title}</TitleH4>)
        .with('h5', () => <TitleH5>{title}</TitleH5>)
        .with('h6', () => <TitleH6>{title}</TitleH6>)
        .exhaustive()}
    </Container>
  );
}

const Container = styled.div``;

const BaseTitle = css`
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.main};
`;

const TitleH1 = styled.h1`
  ${BaseTitle};
`;

const TitleH2 = styled.h2`
  ${BaseTitle};
`;

const TitleH3 = styled.h3`
  ${BaseTitle};
`;

const TitleH4 = styled.h4`
  ${BaseTitle};
`;

const TitleH5 = styled.h5`
  ${BaseTitle};
`;

const TitleH6 = styled.h6`
  ${BaseTitle};
`;

export default Heading;
