import React, { useState } from 'react';
import data from './data';
function App() {

  let [inputValue,setInputValue] = useState(0)
  let [text,setText] = useState([])

  function submitHandler(e){
    e.preventDefault()
    setText(data.slice(0, inputValue));
  }

  if(inputValue<0){
    setInputValue(0)
  }
  if(inputValue>9){
    setInputValue(9)
  }
  
  return (
  <section className='section-center' >
      <h3>TIRED OF BORING LOREM IPSUM?</h3>
    <form className='lorem-form' onSubmit={submitHandler}>
      <label htmlFor="para">Paragraphs: </label>
      <input type="number" id='para' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      <button className='btn' type='btn'>Generate</button>
    </form>
    <h5 style={{marginBottom:"20px"}}>Tip: Max Paragraphs To Generate is 9</h5>
    <div className="result">
      <article className='lorem-text'>
        {text.map((item,index)=>{
          return <p key={index}> {item}</p>
        })}
      </article>
    </div>
  </section>
    )
}

export default App;
