import React from 'react'
import ReactDOM from 'react-dom'
import { 
  ApolloClient,
  ApolloProvider,
  ApolloLink,
  InMemoryCache,
  HttpLink,
  from,
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { App } from './App'
import Context from './Context'

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem('token')

  if (token) {
    operation.setContext({
      headers: {
        authorization: `Bearer ${token}`
      },
    })
  }

  return forward(operation)
})

const errorMiddleware = onError(
  ({ networkError }) => {
    if(networkError && networkError.result.code === 'invalid_token') {
      sessionStorage.removeItem('token')
      window.location.href = '/'
    }
  }
)

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    errorMiddleware,
    authMiddleware,
    new HttpLink({
      uri: 'https://petgram-server-vnav-vnavarro.vercel.app/graphql',
    }) 
  ])
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Context.Provider>
      <App />
    </Context.Provider>
  </ApolloProvider>, document.getElementById('app')
)
