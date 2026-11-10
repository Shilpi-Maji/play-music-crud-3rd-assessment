import { yupResolver } from "@hookform/resolvers/yup"
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material"
import { X } from "lucide-react"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Schema } from "../services/validation/Schema"

const DialogMusic = ({mode,setMode,data,setData,editId,setEditId}) => {
  const [isUpdate,setIsUpdate]=useState(false)
  const[id,setId]=useState(0)
  console.log("id",id)
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState:{errors},
  }=useForm({
    resolver:yupResolver(Schema),
    defaultValues:{
      musicName:"",
    }
  })
  useEffect(()=>{
    if(editId !== null){
      const dt=data.filter(item=>item.id===editId)
      if(dt.length>0){
        setIsUpdate(true)
        setId(editId)
        setValue("musicName",dt[0].musicName)
      }
    }
  },[editId])
  const submitData=(values)=>{
  console.log("valus",values)
  if(isUpdate){
    handleUpdate(values)
  }else{
  handleSave(values)
    
  }
  }

  const handleSave=(values)=>{
   const newObj={
     id:data.length>0 ? Math.max(...data.map(item=>item.id))+1 :1,
     musicName:values.musicName,
   }
   const dt=[...data]
   dt.push(newObj)
   setData(dt)
   handleClear()
   setMode(false)
  }

  const handleUpdate=(values)=>{
   const index=data.map(item=>{
    return item.id
   }).indexOf(id)
   const dt=[...data]
   if(dt[index]){
    // id=id,
      dt[index]={
       ...dt[index],
       musicName:values.musicName
     }
   }
   setData(dt)
   handleClear()
   setMode(false)
  }

 const handleClear=()=>{
  setId(0)
  setIsUpdate(false)
  reset({
    musicName:"",
  })
 }
  return (
   <>
   <Dialog open={mode} onClose={()=>setMode(false)}>
    <DialogTitle sx={{display:"flex",alignItems:"center"}}>Add music name and music file
      <X size={30} onClick={()=>setMode(false)}/>
    </DialogTitle>
    <Box component="form" onSubmit={handleSubmit(submitData)}>
      <DialogContent>
      <TextField label="Enter Music Name" fullWidth {...register("musicName")} error={errors?.musicName} helperText={errors?.musicName?.message}/>
      </DialogContent>
      <DialogActions>
        <Button onClick={()=>setMode(false)}>cancel</Button>
        <Button type="submit">{isUpdate ? "Update" :"Save"}</Button>
      </DialogActions>
    </Box>
   </Dialog>
   </>
  )
}

export default DialogMusic
