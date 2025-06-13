import SideBar from './containers/SideBar'
import ToDoList from './containers/ToDoList'
import GlobalStyle, { Container } from './styles'

function App() {
  return (
    <div className="App">
      <>
        <GlobalStyle />
        <Container>
          <SideBar />
          <ToDoList />
        </Container>
      </>
    </div>
  )
}

export default App
