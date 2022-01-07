import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { App } from './App'
import Context from './Context'

const client = new ApolloClient({
  uri: 'https://petgram-server-vnav-vnavarro.vercel.app/graphql',
  cache: new InMemoryCache(),
  request: operation => {
    const token = window.sessionStorage.getItem('token')
    const authorization = token ? `bearer ${token}` : ''
    operation.setContext({
      headers: {
        authorization
      }
    })
  },
  onError: error => {
    const { networkError } = error
    if (networkError && networkError.result.code === 'invalid_token') {
      window.sessionStorage.removeItem('token')
      window.location.href = '/'
    }
  }
})

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>, document.getElementById('app'))
