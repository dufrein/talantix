import React from 'react';
import styled from 'styled-components';
import withSizes from 'react-sizes';
import Filter from './Filter';
import CardsBoard from './CardsBoard';

const StyledLayout = styled.main`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color:#EDF2F7;
`;


class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      users: [],
      filteredPosts: []
    }
  }

  componentDidMount = () => {
    this.getPosts().then(posts => {
      Array.isArray(posts);
      this.setState({ posts });
      this.setState({ filteredPosts: posts });
    });
    this.getUsers().then(users => Array.isArray(users) && this.setState({ users }));
  }

  getPosts = async () => {
    let posts = [];
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    if (response.status === 200) {
      return response.json();
    }
    else {
      return posts;
    }
  }

  getUsers = async () => {
    let users = [];
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (response.status === 200) {
      return response.json();
    }
    else {
      return users;
    }
  }

  defineSize = (width) => {
    if (width <= 480) {
      return "extraSmall"
    }
    else if (width <= 800 && width > 480) {
      return 'small'
    }
    else if (width < 1100 && width >= 800) {
      return 'medium'
    }
    else return 'large'
  }

  filter = (e) => {
    const filterValue = e.target.value;
    const filteredUsers = this.state.users.filter(user => user.name.toLowerCase().indexOf(filterValue.toLowerCase()) === 0);
    const filteredIdUsers = filteredUsers.map(user => user.id);
    console.dir(filteredIdUsers);
    const filteredPosts = this.state.posts.filter(post => filteredIdUsers.includes(post.userId));
    this.setState({
      filteredPosts
    })
  }

  render() {
    return (
      <StyledLayout>
        <Filter filter={this.filter} width={this.defineSize(this.props.width)} />
        <CardsBoard posts={this.state.filteredPosts} users={this.state.users} width={this.defineSize(this.props.width)} />
      </StyledLayout>
    )
  }
}

const mapSizesToProps = ({ width }) => ({
  // extraSmall: width < 480,
  // small: width < 800 && width >= 480,
  // medium: width < 1100 && width >= 800,
  // large: width >= 1100
  width: width
})

export default withSizes(mapSizesToProps)(MainPage)