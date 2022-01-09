import React from 'react';
import styled from 'styled-components';

const SearchBlock = styled.div`
  position: absolute;
  top: 60px;
  width: 850px;
  height: 66px;
  background-color: #fff;
  color: #000;
  border-radius: 32px;
`;


const Search = ({ search }) => {
  return (
    <SearchBlock>{search}</SearchBlock>
  );
}

export default Search;