import React, { useState } from 'react'


type numType = {
   num: number;
   setNum: Function;
}


export default function Yzustand() {
   const [num, setNum] = useState(0)
   return (
       <div>
           <h1>num: {num}</h1>
           <button className='p-2 m-2 border-2 border-black' onClick={() => setNum(num + 1)}>Root</button>
           <hr />
           Call A:  <A num={num} setNum={setNum} />
       </div>
   )
}


const A = ({num, setNum}: numType) => {
   return (
       <div>A component
           <hr />
           Call B: <B num={num} setNum={setNum} />
       </div>
   )
}


const B = ({num, setNum}: numType) => {
   return (
       <div>B component
           <hr />
           Call C: <C num={num} setNum={setNum} />
       </div>
   )
}


const C = ({num,setNum}: numType) => {
   return <> <br />
       C component 
       <br />
       <button
       className='p-2 m-2 border-2 border-black'
       onClick={() => setNum(num+1)}>Update</button>
       <hr />
   </>
}



