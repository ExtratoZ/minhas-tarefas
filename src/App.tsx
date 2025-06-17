import { Provider } from 'react-redux'
import SideBar from './containers/SideBar'
import ToDoList from './containers/ToDoList'
import GlobalStyle, { Container } from './styles'
import store from './store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <GlobalStyle />
        <Container>
          <SideBar />
          <ToDoList />
        </Container>
      </Provider>
    </div>
  )
}

export default App
