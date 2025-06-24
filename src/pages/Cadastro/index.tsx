import Formulario from '../../containers/Form'
import SideBar from '../../containers/SideBar'

const Cadastro = () => (
  <>
    {/* barra lateral */}
    <SideBar mostrarFiltros={false} />
    <Formulario />
  </>
)

export default Cadastro
