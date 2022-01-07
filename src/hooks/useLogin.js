import { gql, useMutation } from '@apollo/client'

const LOGIN_MUTATION = gql`
  mutation login($input: UserCredentials!) {
    login(input: $input)
  }
`

export const useLogin = (loginCallback) => {
  const [loginMutation, { data, loading, error }] = useMutation(LOGIN_MUTATION)
  const doLogin = ({ email, password }) => {
    const variables = { input: { email, password } }
    loginMutation({ variables }).then(loginCallback)
  }

  return [ doLogin, { data, loading, error } ]
}

