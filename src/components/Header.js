import React from 'react';
import UserSimpleInfo from './UserSimpleInfo';
import logo from './../img/logo.png';
import styled from 'styled-components';

const StyleHeader = styled.div`
   background-color:white;
   display:flex;
   justify-content: space-between;

`;
const StyleLogoHeader = styled.img`
   height: 100px;
   padding: 5px 20px;

`;
const StyleUserSimpleInfo = styled.div`
   height: 114px;
`;
const Header = () => {
    //Logo
    return(
        <>
            <StyleHeader>
                <StyleLogoHeader  src={logo}/>
                <StyleUserSimpleInfo>
                    <UserSimpleInfo/>
                </StyleUserSimpleInfo>
              
            </StyleHeader>
        </>
    );
}

export default Header;