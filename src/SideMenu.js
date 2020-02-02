import React from 'react';
import App from './App';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faHashtag,faBell,faEnvelope,faBookmark,faIdCard,faEllipsisH,faList } from '@fortawesome/free-solid-svg-icons'
import { Menu } from '@material-ui/core';

const MenuItemStyled = styled.h1`
color: #FFFFFF;
font-weight: 350;
font-size: 25px;
margin: 30px 10px 0px 5px;

& :hover {
  background-color: #1DA1F2;
}
`

const ContainerStyle = styled.div`
margin: 50px 20px 10px 10px;


`


const SideMenu = (props) => (
   <Grid container spacing={3} direction = "row" >

    <Grid item xs={5}>

    </Grid>
     
     <Grid Item xs={7}>
       <Grid container spacing={3} direction = "column" justify="flex-end">
            
<ContainerStyle>
<MenuItemStyled> 
  <Grid item>
    
    <FontAwesomeIcon icon={faHome}/>  Home 
    
  </Grid>
  </MenuItemStyled>


  <MenuItemStyled>
  <Grid item >
   
    <FontAwesomeIcon icon={faHashtag} />  Explore
  </Grid>
  </MenuItemStyled>
  
  <MenuItemStyled> 
  <Grid item>
  <FontAwesomeIcon icon={faBell}/> Notifications
  </Grid>
  </MenuItemStyled>

  <MenuItemStyled> 
  <Grid item>
  <FontAwesomeIcon icon={faEnvelope} /> Messages
  </Grid>
  </MenuItemStyled>

  <MenuItemStyled>
    <Grid item>
  
  <FontAwesomeIcon icon={faBookmark} /> Bookmarks
  </Grid>
  </MenuItemStyled>

  <MenuItemStyled>
  <Grid item>
  
  <FontAwesomeIcon icon={faList}/> Lists
  </Grid>
  </MenuItemStyled>

  <MenuItemStyled>
  <Grid item>
  
  <FontAwesomeIcon icon={faIdCard}/> Profile
  </Grid>
  </MenuItemStyled>

  <MenuItemStyled>
  <Grid item>
  
  <FontAwesomeIcon icon={faEllipsisH}/> More
  </Grid>
  </MenuItemStyled>

  </ContainerStyle>

       </Grid>
     </Grid>

     

   </Grid>
  );


  
  export default SideMenu;