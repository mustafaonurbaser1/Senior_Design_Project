import React, { useContext,useState,useRef } from 'react'
import { SLogo, SSidebar, SSearch, SSearchIcon, Name, NameContainer, SDivider, SLink, SLinkIcon, SLinkLabel, SLinkNotification, SLinkContainer, STheme, SThemeLabel, SToggleThumb, SThemeToggler, SSidebarButton } from './styles';
import { imageJPG } from './../../assets/index';
import {AiOutlineSearch, AiOutlineHome,AiOutlineSetting,AiOutlineLeft,AiOutlineCheckCircle} from 'react-icons/ai';
import {MdLogout } from "react-icons/md";
import {RiCalendarTodoLine} from "react-icons/ri"
import {BsCalendarDate} from "react-icons/bs"
import { ThemeContext } from './../../App';
import { useLocation } from 'react-router-dom';


const Sidebar = ({name}) => {
  const searchRef = useRef(null);
  const {setTheme , theme} = useContext(ThemeContext);
  const [sideBarOpen,setSideBarOpen] = useState(false);
  const {pathname} = useLocation()

  const searchClickHandler = () => {
    if(!sideBarOpen) {
      setSideBarOpen(true);
      searchRef.current.focus()
    }
    else{
      // search functionality
    }
  }

  return (
    <SSidebar isOpen = {sideBarOpen}>

    
        <SSidebarButton isOpen={sideBarOpen} onClick = {()=> setSideBarOpen(!sideBarOpen)}>
          <AiOutlineLeft/>
        </SSidebarButton>
   
        <SLogo>
          <img src = {imageJPG} alt = "logo"/>
          {sideBarOpen && <NameContainer>
            <Name name = {name} >{name}</Name>
          </NameContainer>}
          
        </SLogo>

        <SSearch onClick={searchClickHandler} style={!sideBarOpen ? {width:'fit-content'}:{}}>
          <SSearchIcon>{<AiOutlineSearch/>}</SSearchIcon>
          <input placeholder='Search' style = {!sideBarOpen ? {width:0 , padding:0}:{}}/>
        </SSearch>

        <SDivider/>
   {linksArray.map(({icon, label, notification,to})=> (
       <SLinkContainer key = {label} isActive = {pathname=== to}>
          <SLink to={to} style ={!sideBarOpen ? {width:"fit-content"}:{}}>
            <SLinkIcon>{icon}</SLinkIcon>
         
            {sideBarOpen && (
            <>
            <SLinkLabel>{label}</SLinkLabel>
            {!!notification && <SLinkNotification><span>{notification}</span></SLinkNotification>}
            </>
            )}
        </SLink>
       </SLinkContainer>
        

   ))}
      <SDivider/>

      {secondaryLinksArray.map(({label,icon,to}) => (
        <SLinkContainer key = {label} isActive = {pathname=== to}>
          <SLink to={to} style={!sideBarOpen ? {width:"fit-content"}:{}}>
            
            <SLinkIcon>{icon}</SLinkIcon>
            {sideBarOpen && (
            <SLinkLabel>{label}</SLinkLabel>
            )}
          </SLink>
        </SLinkContainer>
      ))}

      <SDivider/>

      <STheme>
        {sideBarOpen && <SThemeLabel>Dark Mode</SThemeLabel>}
        
        <SThemeToggler isActive = {theme === "dark"} onClick = {() => setTheme(p => p === "light"  ? "dark" : "light")}>
          <SToggleThumb style = {theme === "dark" ? {right:"1px"} : {}}/>
        </SThemeToggler>
      </STheme>
    </SSidebar>
  )
}

const linksArray = [
  {
      label: "Home",
      icon: <AiOutlineHome />,
      to: "/HomePage",
      notification: 0,
  },
  {
      label: "Add Todo",
      icon: <AiOutlineCheckCircle />,
      to: "/addtodo",
      notification: 3,
  },
  {
    label: "List Todo",
    icon: <RiCalendarTodoLine />,
    to: "/listtodo",
    notification: 20,
},
{
  label: "Show Events",
  icon: <BsCalendarDate />,
  to: "/showevents",
  notification: 355,
},


];

const secondaryLinksArray = [
  {
      label: "Settings",
      icon: <AiOutlineSetting />,
      to:"/settings"
  },
  {
      label: "Logout",
      icon: <MdLogout />,
      to: "/logout"
  },
];

export default Sidebar