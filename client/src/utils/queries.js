import { gql, useQuery } from '@apollo/client';


export const GET_ME = gql`
  query me {
    me { 
      _id
      username
      email
      savedsets {
        _id
        item_number
        name
        year
        theme
        subtheme
        pieces
        minifigures
        image_url
      }
    }
  }
`;

export const QUERY_SETS = gql`
  query showSavedSets {
    savedsets {
      _id
      item_number
      name
      year
      theme
      subtheme
      pieces
      minifigures
      image_url
    }
  }
`
export const QUERY_DATA_SET = gql`
  query showAllSets {
    set {
      _id
      item_number
      name
      year
      theme
      subtheme
      pieces
      minifigures
      image_url
    }
  }
`

export const QUERY_SINGLE_SET = gql`
  query findOneSet($setName: Name!) {
    set(setName: $setName) {
      _id
      item_number
      name
      year
      theme
      subtheme
      pieces
      minifigures
      image_url
    }
  }
`;
export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      savedsets {
        _id
        item_number
        name
        year
        theme
        subtheme
        pieces
        minifigures
        image_url
      }
    }
  }
`;