import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { Button, Campo } from '../../styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/TaskEnum'

type Props = {
  mostrarFiltros: boolean
}

const SideBar = ({ mostrarFiltros }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { termo } = useSelector((state: RootReducer) => state.filter)

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(e) => dispatch(alteraTermo(e.target.value))}
            />
            <S.Filtros>
              <FiltroCard
                valor={enums.Status.PENDENTE}
                criterio="status"
                label="Pendentes"
              />
              <FiltroCard
                valor={enums.Status.CONCLUIDA}
                criterio="status"
                label="Concluídas"
              />
              <FiltroCard
                valor={enums.Prioridade.NORMAL}
                criterio="prioridade"
                label="Normal"
              />
              <FiltroCard
                valor={enums.Prioridade.IMPORTANTE}
                criterio="prioridade"
                label="Importantes"
              />
              <FiltroCard
                valor={enums.Prioridade.URGENTE}
                criterio="prioridade"
                label="Urgentes"
              />
              <FiltroCard criterio="todas" label="Todas" />
            </S.Filtros>
          </>
        ) : (
          <Button onClick={() => navigate('/')}>
            Voltar a lista de tarefas
          </Button>
        )}
      </div>
    </S.Aside>
  )
}

export default SideBar
