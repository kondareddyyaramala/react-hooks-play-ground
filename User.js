import React, { useState, useRef, useEffect } from 'react';

export default function User(props) {
  const [userName, setUserName] = useState('');
  const inputRef = useRef();

  const handleClick = () => {
    setUserName(inputRef.current.value);
  }

  useEffect(() => {
    console.log('Username changes :: ', userName);
    return () => { console.log('Effect is getting cleaned up')}
  }, [userName]);

  return (
    <>
      <input ref={inputRef}/>
      <br />
      <button onClick={handleClick} >Update Name</button>
      <div>{ userName }</div>
    </>
  )
}