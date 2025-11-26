
import { useState } from 'react'
// import Card from './components/Card'
import LogoutBtn from './components/LogoutBtn';
import LoginBtn from './components/LoginBtn';

function App() {

  const[isLoggedin, setLoggedin] = useState(false);

    if(!isLoggedin){
      return(
        <LoginBtn/>
      )
    }

  return (
    <div>
      <h1>Welcome to the world of harsh</h1>
      <div>
        {isLoggedin && <LogoutBtn/>}
      </div>
    </div>
  )

  // return (
  //   <div>
  //       {isLoggedin ? <LogoutBtn/> : <LoginBtn/>}
  //   </div>
  // )
  // if(isLoggedin){
  //   return (
  //     <LogoutBtn/>
  //   )
  // }
  // else{
  //   return(
  //     <LoginBtn/>
  //   )
  // }

  // const[name, setName] = useState('');
  // return (
  //   <div>
  //     <Card title = "card1" name = {name} setName = {setName}/>
  //     <Card title = "card2" name = {name} setName = {setName}/>
  //     {/* <p>I am inside parent component and value of name is {name}</p> */}
  //   </div>
      
       
  // )
}

export default App
