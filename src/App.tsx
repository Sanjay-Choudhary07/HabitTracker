import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import { Container, Typography } from '@mui/material';
import AddHabitForm from './components/addHabitForm';
function App() {
  return (
    <Provider store={store}>
      <Container>
       <Typography component="h1" variant='h2' align='center'>
        Habit Tracker
       </Typography>
       <AddHabitForm/>
      </Container>
    </Provider>
    
  )
}

export default App