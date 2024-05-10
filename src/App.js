import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';
function App() {
  //js code
  const [Principle,setPrinciple] = useState(0);
  const [Intetest,setInterest] = useState(0);
  const [Rate,setRate] = useState(0);
  const [Year,setYear] = useState(0);
  
  const handleSubmit=(e)=>{
    e.preventDefault();
  console.log("======Principle amount=====");
  console.log(Principle);
  console.log("======Rate of intrr====");
  console.log(Rate);
  console.log("======year=====");
  console.log(Year);
  let result = Principle*Year*Rate/100;
  console.log(result);
  setInterest(result)//assigning the result to setInterest
  }
  function clearValues(){
    setPrinciple(0);
    setInterest(0);
    setRate(0);
    setYear(0);
  }
  return (
    <div className='d-flex justify-content-center align-items-center w-100 mt-5'style={{height:"70vh"}}>
      <div style={{width:"500px"}} className='bg-light p-5 rounded'>
      <h3>Simple Interest</h3>
      <p>
        Calculate your simple Interest easily
      </p>
      <div style={{height:"150px",backgroundColor:"#ff9933"}}className='flex-column mt-5 bg warning d-flex justify-content-center align-items-center w-100 rounded'>
        <h1>{'\u20B9'}{Intetest}</h1>
        <p>Total simple interest</p>
      </div>
      <form action="" className='mt-5' onSubmit={(e)=> handleSubmit(e)}>
        <div className="mb-3">
        <TextField id="outlined-basic" label="Principle Amount" variant="outlined" className='w-100' value={Principle}
        onChange={(e)=>setPrinciple(e.target.value)}
        />
        </div>
        <div className="mb-3">
        <TextField id="outlined-basic" label="Rate of Interest (pa)%" variant="outlined" className='w-100' value={Rate}
        onChange={(e)=>setRate(e.target.value)}/>
        </div>
        <div className="mb-3">
        <TextField id="outlined-basic" label="Year(Yr)" variant="outlined" className='w-100' value={Year}
        onChange={(e)=>setYear(e.target.value)}/>
        </div>
        <div className='mt-5'>
        <Stack direction="row" spacing={2}>
        <Button style={{height:"50px",width:"200px"}} variant="contained" className='bg-success' type='submit'>CALCULATE</Button>
        <Button style={{height:"50px",width:"200px",color:"blue"}} variant="contained" className='bg-light' onClick={clearValues}>RESET</Button>
        </Stack>
        </div>
      </form>
      </div>
       
      
    </div>
  );
}

export default App;
