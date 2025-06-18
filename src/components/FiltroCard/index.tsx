import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { alterarFiltro } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/TaskEnum'
import { RootReducer } from '../../store'

export type Props = {
  label?: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}

const FiltroCard = ({ label, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filter, tasks } = useSelector((state: RootReducer) => state)

  const verificaEstaAtivo = () => {
    const mesmoCriterio = filter.criterio === criterio
    const mesmoValor = filter.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const contaTask = () => {
    if (criterio === 'todas') return tasks.itens.length
    if (criterio === 'prioridade') {
      return tasks.itens.filter((item) => item.prioridade === valor).length
    }
    if (criterio === 'status') {
      return tasks.itens.filter((item) => item.status === valor).length
    }
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        valor
      })
    )
  }

  const contador = contaTask()
  const ativo = verificaEstaAtivo()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{label}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
