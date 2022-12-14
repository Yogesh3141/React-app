import React from 'react'
import { Firstname } from './App'
import { Lastname } from './App'

const ComC = () => {
  return (
    <>
    <Firstname.Consumer>
        {(fname)=>{
         return(
            <Lastname.Consumer>
             {(lname)=>{
            return(
             <h4>User Name is {fname} {lname}</h4>
            )
            }}</Lastname.Consumer>
         )
        }}
    </Firstname.Consumer>
   
    </>
  )
}

export default ComC