import React, { useState } from 'react'
import styled from "styled-components";
import { motion } from 'framer-motion'
import {AccountContext} from './AccountContext'
import LoginForm from './LoginForm';
import  SignupForm  from './SignupForm';
import envelopeMoney2 from '../images/envelopeMoney2.jpg'



const Background = styled.div`
  width: 100%;
  display: flex;
  background-color: #ffffff;
  height: auto;
`

const BoxContainer = styled.div`
  width: 320px;
  margin-left: auto;
  margin-right:auto;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  background-color: #ffffff;
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 18px;
  padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -240px;
  left: -70px;
  background: rgb(139,231,151);
background: linear-gradient(45deg,
 rgba(139,231,151,1) 44%, 
 rgba(148,201,233,1) 73%); 
`

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: .40;
  color: #fff;
  z-index: 10;
  `

const SmallText = styled.h5`
  font-size: 11px;
  font-weight: 500;
  color: #fff;
  z-index: 10;
  margin: 0;
`

const LogoContainer = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 25%;
  margin-top: 20px;
`


const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 0 15px;
`

const backdropVariants = {
  expanded: {
    width: "233%",
    height: "900px",
    borderRadius: "20%",
    transform: "rotate(60deg)"
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)"
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
}

export function AccountBox(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("signin")

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(()=>{
      setExpanded(false);
    }, expandingTransition.duration * 1000 -1500);
  };

  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(()=>{
      setActive("signup")
    }, 600);
  };


  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(()=>{
      setActive("signin")
    }, 600);
  };


  const contextValue = { switchToSignup, switchToSignin};

  return (
    <AccountContext.Provider value={contextValue}>
    <Background>
    <BoxContainer>
      <TopContainer>
          <BackDrop 
          initial={false} 
          animate={isExpanded ? "expanded" : "collapsed"} 
          variants={backdropVariants}
          transition = {expandingTransition}
          />
          
          {active === "signin" &&
          <HeaderContainer>
              <HeaderText>Welcome</HeaderText>
                <HeaderText>
                    Back to Envelope
                    <LogoContainer>
                      <img src={envelopeMoney2} alt="this is money envelope" width="60" height="60"></img>
                    </LogoContainer>
                </HeaderText>
              <SmallText>Please sign in to continue </SmallText>
          </HeaderContainer>}
            {active === "signup" &&
          <HeaderContainer>
              <HeaderText>Create</HeaderText>
              <HeaderText>Account</HeaderText>
              <SmallText>Please sign up to continue</SmallText>
          </HeaderContainer>}
      </TopContainer>
      <InnerContainer>
        {active === 'signin' && <LoginForm/> }
        {active === 'signup' && <SignupForm/> }
      </InnerContainer>
    </BoxContainer>
    </Background>
    </AccountContext.Provider>
  );
}