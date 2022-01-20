import React,{useState} from 'react'
import {NavbarContainer,RightContainer,LeftContainer, NavbarInnerContainer, ExtendedContainer,  NavbarLink,NavbarLinkContainer,Logo , OpenLinksButton,NavbarLinkExtended} from '../styles/Navbar.style'


const Navbar = () => {
    const [extendNavbar,setExtendNavbar] = useState(false)
    return (
       <NavbarContainer extendNavbar ={extendNavbar}>
           <NavbarInnerContainer>

           <LeftContainer>
               <NavbarLinkContainer>
                <NavbarLink to="/">Home</NavbarLink>
                <NavbarLink to="/search">search</NavbarLink>
                <NavbarLink to="/test">test</NavbarLink>
                <NavbarLink to="/test">Contact Us</NavbarLink>
                <NavbarLink to="/test">test</NavbarLink>
                <OpenLinksButton onClick={() => {setExtendNavbar((curr) => !curr)}}>{extendNavbar? <> &#10005;</> : <>&#8801;</> }</OpenLinksButton>

               </NavbarLinkContainer>
           </LeftContainer>

           <RightContainer>
               {/* <Logo src={LogoImg} style={{width:"100px",height:"70px"}}></Logo> */}
           </RightContainer>

           </NavbarInnerContainer>
           {extendNavbar &&(
               <ExtendedContainer>
           <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
                <NavbarLinkExtended to="/flight">Flight</NavbarLinkExtended>
                <NavbarLinkExtended to="/about">About</NavbarLinkExtended>
                <NavbarLinkExtended to="/contact">Contact Us</NavbarLinkExtended>
                <NavbarLinkExtended to="/fork">Fork</NavbarLinkExtended>
           </ExtendedContainer>
           )}
       </NavbarContainer>
    )
}

export default Navbar