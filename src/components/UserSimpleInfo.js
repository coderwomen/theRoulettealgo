import React from 'react';
import styled from 'styled-components';
import UserLogo from './../img/user.png';

const UserName = styled.div`
   float:left;
   display: flex;
   align-items: center;
   padding:20px;
`;
const StyleUserImg = styled.img`
  height:50px;
  padding:10px
`;
const StyleNameUser = styled.div`
   
`;

const UserSimpleInfo = () => {
    //Imagen de usuario
    //icono de flecha
    return(
        <>
            <UserName> 
                <StyleUserImg src={UserLogo} alt="User"/>
                <StyleNameUser>Ana</StyleNameUser>
            </UserName>
        </>
    );
}

export default UserSimpleInfo;