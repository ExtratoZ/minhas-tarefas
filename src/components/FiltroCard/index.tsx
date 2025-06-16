import * as S from './styles'

export type Props = {
  ativo?: boolean
  contador?: number
  label?: string
}

const FiltroCard = ({ ativo, contador, label }: Props) => (
  <S.Card ativo={ativo}>
    <S.Contador>{contador}</S.Contador>
    <S.Label>{label}</S.Label>
  </S.Card>
)

export default FiltroCard
