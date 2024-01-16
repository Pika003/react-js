import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState('');
  const [opvalue, setOpValue] = useState('');

  function finalValue(){
    setOpValue(value)
    setValue(eval(value))
  }

  function clear(){
    setOpValue('')
    setValue('')
  }

  return (
    <>
      <div className='main'>
        <div className="screen">
          <div className="expretion">
            <input readOnly type="text" value={opvalue}/>
          </div>
          <div className="result">
            <input readOnly type="text" value={value}/>
          </div>
        </div>

        <div className='buttons'>
          <div className='btn'> 
            <input className='button-30' role="button" type="button" value="CE" onClick={clear}/>
            <input className='button-30' role="button" type="button" value="DE" onClick={e=> setValue(value.slice(0,-1))}/>
            <input className='button-30' role="button" type="button" value="." onClick={e=> setValue(value + e.target.value)}/>
            <input className='button-30' role="button" type="button" value="/" onClick={e=> setValue(value + e.target.value)}/>
          </div>
          <div className='btn'>
            <input className='button-30' role="button" type="button" value="7" onClick={e=> setValue(value + e.target.value)}/>
            <input className='button-30' role="button" type="button" value="8" onClick={e=> setValue(value + e.target.value)}/>
            <input className='button-30' role="button" type="button" value="9" onClick={e=> setValue(value + e.target.value)}/>
            <input className='button-30' role="button" type="button" value="*" onClick={e=> setValue(value + e.target.value)}/>
          </div>
          <div className='btn'>
            <input className='button-30' role="button" type="button" value="4" onClick={e=> setValue(value + e.target.value)}/>
            <input className='button-30' role="button" type="button" value="5" onClick={e=> setValue(value + e.target.value)}/>
            <input className='button-30' role="button" type="button" value="6" onClick={e=> setValue(value + e.target.value)}/>
            <input className='button-30' role="button" type="button" value="+" onClick={e=> setValue(value + e.target.value)}/>
          </div>
          <div className='btn'>
            <input className='button-30' role="button" type="button" value="1" onClick={e=> setValue(value + e.target.value)}/>
            <input className='button-30' role="button" type="button" value="2" onClick={e=> setValue(value + e.target.value)}/>
            <input className='button-30' role="button" type="button" value="3" onClick={e=> setValue(value + e.target.value)}/>
            <input className='button-30' role="button" type="button" value="-" onClick={e=> setValue(value + e.target.value)}/>
          </div>
          <div className='btn'>
            <input className='button-30' role="button" type="button" value="00" onClick={e=> setValue(value + e.target.value)}/>
            <input className='button-30' role="button" type="button" value="0" onClick={e=> setValue(value + e.target.value)}/>
            <input className='button-30' role="button" type="button" value="=" id='equal'onClick={finalValue}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
