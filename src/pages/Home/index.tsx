import BotaoAdd from '../../components/BotaoAdd'
import SideBar from '../../containers/SideBar'
import ToDoList from '../../containers/ToDoList'

const Home = () => {
  return (
    <>
      <SideBar mostrarFiltros />
      <ToDoList />
      <BotaoAdd />
    </>
  )
}

export default Home
