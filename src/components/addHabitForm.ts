import React, { useState } from 'react';
import { Box, TextField } from '@mui/material';
// import { Label } from '@mui/icons-material';
const AddHabitForm:React.FC = () => {
    const [name, setName]=useState<string>("");
    const [frequency, setFrequency]=useState<"daily"|"weekly">("daily");
  return (
    <form>
      <Box 
       sx={{
        display:"flex",
        flexDirection:"column",
        gap:2,
      }}
      >
      <TextField
       label="Habit name"
       value={name}
       onChange={(e)=>setName(e.target.value)}
       placeholder:"enter your habit name"
       fullWidth
      />
      </Box>
    </form>
  )
}

export default AddHabitForm;
