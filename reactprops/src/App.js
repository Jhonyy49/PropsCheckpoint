import Profile from './profile/Profile.js';
import './App.css';
import Image from 'C:/Users/hp/Desktop/ReactProps/reactprops/src/ProfilePicture.jpg';


function App() {
  let myName="Wissem"
const handleName=()=>{
  alert(`my name is ${myName}`)
}
  return (

    <>
      <Profile name ="Wissem Jderi" 
      bio ="I'm 16 years old and im learning React!" profession = "I don't have" handleName={handleName}> 
      <img src={Image} style={{height:"300px"}}  />
      </Profile>


    </>

  );
}


export default App;
