import { AppBar, Box, Container, Toolbar } from "@mui/material"
import { NavLink } from "react-router-dom"
const page=[
  {path:"",label:"HOME"},
  {path:"/music-list",label:"MUSIC LIST"},
]
const Header = () => {
  return (
   <>
   <AppBar position="static" sx={{bgcolor:"goldenrod"}}>
    <Container maxWidth="md">
      <Toolbar disableGutters>
        <Box sx={{display:"flex",justifyContent:"space-around",width:"100%"}}>
          {page.map((item,index)=>(
            <NavLink to={item.path}style={{textDecoration:"none"}} key={index}>{item.label}</NavLink>
          ))}
        </Box>
      </Toolbar>
    </Container>
   </AppBar>
   </>
  )
}

export default Header
