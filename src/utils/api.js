import axios from 'axios';

export function getPosts() {
  return axios.get('http://52.15.239.89:80/mongodb');
}

export function getPosts2() {
  return axios.get('http://18.218.191.100:80/mongodb');
}

export function getCPU() {
  return axios.get('http://52.15.239.89:80/mongodb/obtenerCPU');
}

export function getCPU2() {
  return axios.get('http://18.218.191.100:80/mongodb/obtenerCPU');
}

export function getMemoria() {
  return axios.get('http://52.15.239.89:80/mongodb/obtenerMemoria');
}

export function getMemoria2() {
  return axios.get('http://18.218.191.100:80/mongodb/obtenerMemoria');
}

export function postPost({ title, body }) {
  return axios({
    method: 'post',
    url: 'https://jsonplaceholder.typicode.com/posts',
    data: {
      title,
      body,
    }
  })
}
