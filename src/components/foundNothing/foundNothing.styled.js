import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-flow: column;
  -webkit-flex-flow: column;
  align-items: center;
`
export const Message = styled.h4`
  font-size: 1.3em;
  text-align: center;
`
export const Status = styled.p`
  font-size: 1.2em;
  text-transform: uppercase;
  font-weight: 600;
  display: flex;
  align-items: center;
  -webkit-align-items: center;
  margin: 0 0 5vw;
`
export const Emoji = styled.img`
  height: 35px;
  margin: 0 10px 0 0;
`
