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
