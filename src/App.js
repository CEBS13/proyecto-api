import React, { Fragment } from 'react';
import UserCard from './UserCard';
import SideMenu from './SideMenu';
import styled from 'styled-components';
import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider, useQuery } from '@apollo/react-hooks';

import Grid from '@material-ui/core/Grid';

const client = new ApolloClient({
  uri: 'https://graphqlzero.almansi.me/api'
});


 const GET_POST_TITLE = gql`
 query (
   $option1: PageQueryOptions,
   $option2: PageQueryOptions
  
 ){
   users(options: $option1) {
     data {
       id
       username
       name
       posts(options: $option2){
         data{
           id
           title
           body
         }
       }
     }
   }
 }
 `
 


function PostsTitle({option1,option2}) {

  const { loading, error, data, refetch} = useQuery(GET_POST_TITLE,{
    variables:{option1,option2}
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

    return (
      <Fragment>
            
        
        <h3 style={{color:"white"}}>Sort</h3>

        <button onClick={() => refetch({option2:{sort:{field: "title",order:"ASC"}},option1:{sort:{field: "id",order:"ASC"}}}) }>Title</button>

        <button onClick={() => refetch({option1:{sort:{field: "username",order:"ASC"}},option2:{sort:{field: "id",order:"ASC"}}})}>Username</button>

        
      
        { data.users.data.map(({id, name, username, posts}) => (
          
          posts.data.map(({body, title}) =>
           
          <div key={id}>
          
            <div key={title}>   
            <UserCard
            name={name}
            username={username}
            title={title}
            info={body} >

            </UserCard>
            </div>
          </div> 
          )))}

      </Fragment>
      
      
      
    );
}






class App extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
        options: "",
        usuario: ""

    }
  }



  render(
  ){
  return (
    

    <div>
      <ApolloProvider client={client}>
     
      <Grid container spacing={3}  justify="flex-end">

<Grid item xs={3}  >
  
  <SideMenu/>
</Grid>

<Grid item xs={6}>
  
  <PostsTitle />
</Grid>

<Grid item xs={3}>
 

</Grid>

</Grid>


 
   
  </ApolloProvider>


    </div>
  ); 
  }
}

export default App;
