import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const StyledLayout = styled.div`
  position: relative;
  width: 100%;
  padding: 2% 3%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color:#EDF2F7;
`;


class CardsBoard extends React.Component {
  render() {
    return (
      <StyledLayout>
        {this.props.posts.map((post, i) =>
          <Card key={i} author={this.props.users.filter(user => user.id === post.userId)[0] && this.props.users.filter(user => user.id === post.userId)[0].name} title={post.title} body={post.body} width={this.props.width} />
        )}
      </StyledLayout>
    )
  }
}

export default CardsBoard;