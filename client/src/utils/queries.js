import { gql } from '@apollo/client';

export const GET_ME = gql `
query Query {
  me {
    username
    savedSets {
      setID
      name
      number
      theme
      year
      image
    }
  }
}
`;

export const GET_SET = gql `
query Set($setName: String) {
  sets {
    _id
    item_number
    setName
    year
    theme
    subtheme
    pieces
    minifigures
    image_url
  }
}
`;
