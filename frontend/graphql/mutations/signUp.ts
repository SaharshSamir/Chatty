import {gql} from '@apollo/client';

export const SIGN_UP = gql`
    mutation SignUp($email: String!, $username: String!, $password: String!) {
        signUp(email: $email, username: $username, password: $password)
    }
`;