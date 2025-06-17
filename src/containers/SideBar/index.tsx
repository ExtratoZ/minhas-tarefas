import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'

const SideBar = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard label="Pendentes" contador={3} />
        <FiltroCard label="Concluídas" contador={5} />
        <FiltroCard label="Normal" contador={2} />
        <FiltroCard label="Importantes" contador={1} />
        <FiltroCard label="Urgentes" contador={2} />
        <FiltroCard ativo label="Todas" contador={13} />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default SideBar
