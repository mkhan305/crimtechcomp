function App() {
  // TODO: fix the state of this `todos`
  const todos = ['Do the dishes.', 'Finish this project.']
  // TODO: make components needed for TODO
  return (
    <>
      <ul>
        {
          // TODO: use `map` to render tasks from `todos`
          // remember about `keys` prop!
        }
      </ul>

      <form
        style={{
          marginTop: '10px',
        }}
      >
        {
          // TODO: lift input text into a state so you can
          // handle it and add to `todos` array
        }
        <input />
        <button>Create Task</button>
      </form>

      <Modal />
    </>
  )
}

export default App
