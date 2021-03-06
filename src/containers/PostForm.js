import React, { Component } from 'react';
import Post from '../components/Post';
import styled from 'styled-components';
import { getPosts2 } from '../utils/api';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  background-color: #eee;
`;

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      loading: true,
    }
  }

  componentDidMount() {
    getPosts2()
      .then((res) => {
        this.setState({
          posts: res.data,
          loading: false,
        });
      })
      .catch((err) => console.log(err));
  }

  
  renderPosts = () => {
    const { posts } = this.state;

    return posts.map(post => {
      const { autor, frase } = post;

      return (
        <Post
          autor={autor}
          frase={frase}
        />
      );
    });
  }
  

  render() {
    const { loading } = this.state;

    return (
      <Container>
        {loading ? 'loading...' : this.renderPosts()}
      </Container>
    );
  }
}

export default PostForm;
