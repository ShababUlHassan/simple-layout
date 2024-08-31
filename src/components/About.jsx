import React from 'react'
import {useStudent } from '../Hooks/useContext'

const About = () => {

    const {myName,setStudents,student} = useStudent();
  return (
    <div className='flex justify-center h-[90vh] items-center flex-col gap-3'>
        <h3 className='text-red-400 font-semibold text-[30px]'>About Page</h3>
        <p>Hey this Is {myName}</p>
        <button className='border-2 border-orange-600 py-[6px] px-[26px] rounded-md' onClick={()=> setStudents(["Shabab", "Mugees","Hassan"])} >Fetch Students</button>
        {
            student.map( name => <p>{name}</p>)
        }
    </div>
  )
}

export default About