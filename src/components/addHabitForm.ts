import React, { useState } from 'react';
import { Box, TextField, Button, FormControl, InputLabel, Select, MenuItem} from '@mui/material';
import { useDispatch } from "react-redux";
import { addHabit } from "../store/habit-slice";
import { AppDispatch } from "../store/store";
// import { Label } from '@mui/icons-material';
const AddHabitForm:React.FC = () => {
    const [name, setName]=useState<string>("");
    const [frequency, setFrequency]=useState<"daily"|"weekly">("daily");
    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (name.trim()) {
        dispatch(addHabit({ name, frequency }));
        setName("");
      }
    };
  return (
    <form onSubmit={handleSubmit}>
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
       placeholder="enter your habit name"
       fullWidth
      />
      <FormControl fullWidth>
          <InputLabel>Frequency</InputLabel>
          <Select
            value={frequency}
            label="Frequency"
            onChange={(e) => setFrequency(e.target.value as "daily" | "weekly")}
          >
            <MenuItem value="daily">Daily</MenuItem>
            <MenuItem value="weekly">Weekly</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
          Add Habit
        </Button>
      </Box>
    </form>
  )
}

export default AddHabitForm;
