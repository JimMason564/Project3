import { gql } from '@apollo/client';

export const GET_ME = gql`
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

export const GET_SETS = gql`
query Set {
  sets {
    _id
    Item_Number
    Name
    Year
    Theme
    Subtheme
    Pieces
    Minifigures
    Image_URL
  }
}
`;
