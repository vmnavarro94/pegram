import { gql, useMutation } from '@apollo/client'

const REGISTER_MUTAION = gql`
  mutation signup($input: UserCredentials!) {
    signup (input: $input)
  }
`

export const useRegisterUser = (registerCallback) => {
  const [registerUserMutation, { data, loading, error }] = useMutation(REGISTER_MUTAION)
  const doRegister = ({ email, password }) => {
    const variables = { input: { email, password } }
    registerUserMutation({ variables }).then(registerCallback)
  }

  return [ doRegister, { data, loading, error } ]
}
