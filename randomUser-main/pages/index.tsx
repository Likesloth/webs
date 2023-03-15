import { useEffect, useState } from 'react';
export default function Home() {
  const [count, setCount] = useState(0);
  const [mesg, setMesg] = useState('Hello');
  const [person, setPerson] = useState( { name: "John"})

  useEffect( () => {
    // setInterval( () => setCount( prev => prev+1 ), 1000); 
    const id = setInterval( () => setCount( count+1 ), 1000); 
    document.title = "Count:" + count;
    console.count("UseEffect");
    return () => { clearInterval(id); }
  },  [count] );

  useEffect(  () => {
    console.count("Person"); 
  }, [person.name] );

  console.count("Component render!");

  const updateName = () => { 
    setPerson( {name: mesg});
  }

  return (
    <>
      Hello {count} <br />      
      <button onClick={()=>setCount(count+1)}> + </button>
       <br />
      Name: <input type="text" onChange={(e)=> setMesg(e.target.value)} />
      <br /> 
      Name: {person.name}  <button onClick={updateName}>Update Name</button>
    </>
  )
}
