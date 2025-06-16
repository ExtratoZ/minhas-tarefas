import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'

const SideBar = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard label="pendentes" contador={3} />
        <FiltroCard label="concluídas" contador={5} />
        <FiltroCard label="em andamento" contador={2} />
        <FiltroCard label="importantes" contador={1} />
        <FiltroCard label="urgentes" contador={2} />
        <FiltroCard ativo label="todas" contador={13} />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default SideBar
