import { Link } from 'react-router-dom'

import styled from 'styled-components'

export const AddCircle = styled(Link)`
  display: flex;
  text-align: center;
  font-size: 40px;
  height: 64px;
  width: 64px;
  border-radius: 50%;
  background-color: #44bd32;
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: rgb(75, 185, 58);
  }
`
