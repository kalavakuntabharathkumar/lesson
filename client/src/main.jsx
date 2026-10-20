import React from 'react';import{createRoot}from'react-dom/client';import{ApolloClient,InMemoryCache,ApolloProvider,HttpLink}from'@apollo/client';import App from './App';import './styles.css';
const client=new ApolloClient({link:new HttpLink({uri:import.meta.env.VITE_GRAPHQL_URL||'http://localhost:4000/graphql'}),cache:new InMemoryCache({typePolicies:{Query:{fields:{lessons:{keyArgs:['status'],merge:false},messages:{merge:false}}}}})});
createRoot(document.getElementById('root')).render(<ApolloProvider client={client}><App/></ApolloProvider>);
