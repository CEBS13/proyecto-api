import React from 'react';
import App from './App';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const Name = styled.h3`
  color: #FFFFFF;
  text-decoration: underline;
  font-weight: 300;
  font-size: 15px;
  margin: 0px 0px 0px 0px;
  
`
const Username = styled.div`

color : #FFFFFF;
font-weight: 100;
font-size: 13px;
margin: 0px 0px 0px 0px;


`

const Info = styled.p`
color: #FFFFFF;
font-weight: 350;
font-size: 17px;
margin: 17px 0px 0px 0px;
`


const StyledContainer = styled.div`
margin: 0px 0px 0px 0px;
padding: 20px 20px 20px 20px;
border-style: solid;
border-color: #808080;
border-width: thin;
& :hover {
  background-color: #253341;
}
`
const Title = styled.h1`
color: #FFFFFF;
font-weight: 350;
font-size: 20px;
margin: 10px 5px 0px 5px;
`
const UserCard = ({
  name,
  username,
  title,
  info,
  
}) => (
  <StyledContainer>
    <Grid container spacing={1} justify="flex-start" alignItems="flex-end" >


    <Grid item xs={2}>
    <Name>{name}</Name>
       </Grid>

     <Grid item xs={10}>
     <Username>{username}</Username>
       </Grid>    
    
    <Title>{title}</Title>
    <Info>{info}</Info>
    </Grid>
  </StyledContainer>

);
  


  export default UserCard;



