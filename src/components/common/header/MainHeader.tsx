import React from 'react';
import { MainHeaderStyled, HeaderStyled } from '@components/common/header/MainHeader.styled';
import styled from 'styled-components';

const MainHeader = (props: any) => {
  return (
    <Styled.MainHeader>
      {props.test === 'hello' ? 'TEST MainHeader' : 'MAINHEADER'}
    </Styled.MainHeader>
  );
};

const Styled = {
  MainHeader: styled.header`
    color: blue;
  `,
};
export default HeaderStyled(MainHeader);