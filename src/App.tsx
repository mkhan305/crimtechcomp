import React, { useState } from 'react';
import Modal from './components/Modal'; 


function App() : JSX.Element {

  const [input, setInput] = useState<string>('');
  // TODO: fix the state of this `todos`
  const [todos, setTodos] = useState<string []>(['Do the dishes.', 'Finish this project.']); 
  
  function Task( { name, num } : { name : string, num: number}) { 
    const [hovered, setHovered] = useState<boolean>(false);
    
    function handleDeleteTask() : void {
      todos.splice(num, 1); 
      setTodos([...todos])
    }
    return ( 
      <li onClick={handleDeleteTask} 
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}>
        <label> 
          <input style={{marginRight: '10px', backgroundColor: 'black'}} type="checkbox" checked={hovered} /> 
          {hovered ? <s>{name}</s> : name}
        </label> 
      </li> 
    )
  }

  // handles form submit 
  function formSubmit(event: React.FormEvent<HTMLFormElement>) : void { 
    event.preventDefault(); 

    // ensures input is not empty 
    if (input.trim() != '') { 
      setTodos([...todos, input])
      setInput('');
    }
  } 

  function formChange(event : React.ChangeEvent<HTMLInputElement>) : void { 
    event.preventDefault(); 
    setInput(event.currentTarget.value); 
  }


  // TODO: make components needed for TODO
  return (
    <> 
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center' }}> 
        <div style={{ display: 'flex', 
                      border: '2px solid black', 
                      flexDirection: 'column', 
                      width: '40%',
                      minHeight: '50%', 
                      margin: 'auto', 
                      borderRadius: '20px', 
                      padding: '3rem', 
                      justifyContent: 'space-between', 
                      alignItems: 'flex-start', 
                      background: 'white',
                    }}> 
          <div style={{ width: '100%' }}> 
            <h1>to do</h1>
            <hr />
          </div>  
          <ul style={{ listStyleType: 'none', flexGrow: 1 }}>
            {
              todos.map((task, index) => { 
                return <Task name={task} num={index} key={index}/> 
              })
            }
          </ul>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', gap: '40px'}}> 
            <form
              style={{
               flexGrow: 1, display: 'flex', gap: '20px'
              }}
              onSubmit={formSubmit}
            >
              <input 
                value={input}
                onChange={formChange}
                placeholder="task"
                style={{ flexGrow: 1, fontSize: '20px'}}
              />
              <button type="submit" style={{ background: 'black', color:'white' }}>create task</button>
            </form>
            <Modal />
          </div> 


        </div>
      </div> 
    </>
  )
}

export default App
