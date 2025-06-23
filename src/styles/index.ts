import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'
import { Button } from '../components/Tasks/styles'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
    text-decoration: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`
export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
`

export const Campo = styled.input`
  border: 1px solid #666;
  border-radius: 8px;
  padding: 8px;
  background-color: #fff;
  color: #666;
  font-weight: bold;
  border-color: #666;
  width: 100%;
`

export const SaveButton = styled(Button)`
  background-color: ${variaveis.green};
`

export default GlobalStyle
