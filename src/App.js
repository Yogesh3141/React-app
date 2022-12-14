import { createContext } from 'react';
import './App.css';
import ComA from './ComA'

const Firstname = createContext();
const Lastname = createContext();
function App() {
  return (
    <>
    <Firstname.Provider value={"Lokesh"}>
     <Lastname.Provider value={"Sharma"}>
      <ComA/>
      </Lastname.Provider>
    </Firstname.Provider>
    </>  
    );
}

export default App;
export {Firstname}
export {Lastname}
