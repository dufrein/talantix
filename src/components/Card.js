import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  width: ${({ width }) => {
    if (width === 'large' || width === 'medium') {
      return '31.3%'
    }
    else if (width === 'small') {
      return '48%'
    }
    else {
      return '100%'
    }
  }};
  height: max-content;
  margin:0.7% 0;
  padding: 15px;
  display: flex;
  flex-direction: column;
  color: #000;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 5px;
  font-size: 14px;
`;

const Title = styled.p` 
  color: #2A6Aff;
  font-size: 18px;
  font-weight: 400;
`;

const BodyCard = styled.p`
  margin: 15px 0;
  color:#77787A;
  font-size: 15px;
  font-weight: 400;
`;

const Author = styled.p` 
  color: #B7BCBF;
  font-size: 12px;
`;

class Card extends React.PureComponent {
  render() {
    return (
      <StyledCard width={this.props.width}>
        <Title>{this.props.title}</Title>
        <BodyCard>{this.props.body}</BodyCard>
        <Author>{this.props.author}</Author>
      </StyledCard>
    )
  }
}

export default Card;