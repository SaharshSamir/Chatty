import {gql} from '@apollo/client';

export const ME = gql`
    query Me {
        me {
            userId
            username
            contacts {
                username
                userId
            }
            conversations {
                conversation_id
                is_groupChat
                participants {
                    userId
                    username
                }
                messages {
                    message_id
                    text
                    timeStamp
                    sender_id
                }
            }
        }
    }
`

export const LOGIN = gql`
    query Login($email: String!, $password: String!) {
        login(email: $email, password: $password)
    }
`

export const SIGN_UP = gql`
    mutation SignUp($email: String!, $username: String!, $password: String!) {
        signUp(email: $email, username: $username, password: $password)
    }
`