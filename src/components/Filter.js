import React from 'react';
import styled from 'styled-components';
import iconSearch from 'img/iconSearch.svg';

const StyledLayout = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  padding: 0% 3%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FilterField = styled.input` 
  width: ${({ width }) => {
    if (width === 'large' || width === 'medium') {
      return '31.3%'
    }
    else {
      return '100%'
    }
  }};
  height:35px;
  padding-left: 35px;
  border: 1px solid #ddd;
  background-image: url(${iconSearch});
  background-size: 20px 20px;
  background-repeat: no-repeat;
  background-position: 5px;
  font-size: 16px;
`;

const Filter = (props) => {
  return (
    <StyledLayout onClick={props.action}>
      <FilterField width={props.width} placeholder='Filter by author...' onChange={props.filter} />
    </StyledLayout>
  )
}

export default Filter;