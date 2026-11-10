import { Box, Button, Card, CardActions, CardContent, CardHeader, Container, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import DialogMusic from "../components/DialogMusic"

const MusicList = () => {
  const [mode,setMode]=useState(false)
  const [editId,setEditId]=useState(null)
  const [data,setData]=useState(()=>{
    const saveData=localStorage.getItem("MusicList")
    return saveData ? JSON.parse(saveData):[] 
    // return []
  })
  console.log("data",data)
  useEffect(()=>{
    localStorage.setItem("MusicList",JSON.stringify(data))
  },[data])

  const handleEdit=(id)=>{
    setEditId(id)
    setMode(true)
  }

  const handleDelete=(id)=>{
    if(window.confirm("are you sure")){
      const dt=data.filter(item=>item.id !== id)
      setData(dt)
    }
  }
  return (
    <>
    <Container maxWidth="lg">
          <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
      <Stack spacing={2}>
        <Typography variant="h3">All Music List You Can See here</Typography>
        <Typography variant="body1">You can add music name and edit and delete</Typography>
      </Stack>
      <Button variant="contained" sx={{height:"50px"}} onClick={()=>setMode(true)}>ADD MUSIC LIST</Button>
   </Box>
    </Container>
   {/* dialog open */}
   <DialogMusic mode={mode} setMode={setMode} data={data} setData={setData} editId={editId} setEditId={setEditId}/>
   <Box sx={{marginTop:"20px"}}>
    <Container maxWidth="lg">
      {data.map((item,index)=>(
        <Card sx={{bgcolor:"black",color:"gold",display:"flex",justifyContent:"space-between"}}>
          <Stack spacing={1}>
              <CardHeader title={item.musicName}/>
       <CardContent>
        <Typography variant="body2">this is the description</Typography>
       </CardContent>
          </Stack>
     
       <CardActions>
        <Button onClick={()=>handleDelete(item.id)}>Delete</Button>
        <Button onClick={()=>handleEdit(item.id)}>Edit</Button>
       </CardActions>
       </Card>
      ))}
   
    </Container>
   </Box>
    </>
  
  )
}

export default MusicList
