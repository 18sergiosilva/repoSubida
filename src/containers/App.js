import React, { Component } from 'react';
import PostForm from './PostForm';
import Posts from './Posts';
import styled from 'styled-components';
import DynamicMultiSeriesChart from "./Dynamic Multi Series Chart";
import DynamicMultiSeriesChart2 from "./Dynamic Multi Series Chart2";


const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <h1>INFORMACION SERVERS</h1>
        <h2>Elementos Server A: </h2>
        <PostForm />
        <h2>Elementos Server B: </h2>
        <Posts />
        <DynamicMultiSeriesChart2 />
        <DynamicMultiSeriesChart />
        
      </Container>
    );
  }
}

export default App;
