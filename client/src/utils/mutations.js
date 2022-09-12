import { gql } from '@apollo/client';

<<<<<<< HEAD
export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
=======
export const LOGIN_USER = gql `
  mutation Login($email: String!, $password: String!) {
>>>>>>> main
  login(email: $email, password: $password) {
    token
    user {
      username
      email
    }
  }
}
`;

<<<<<<< HEAD
export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
=======
export const ADD_USER = gql `
mutation AddUser($username: String!, $email: String!, $password: String!) {
>>>>>>> main
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      username
      email
    }
  }
}
`;