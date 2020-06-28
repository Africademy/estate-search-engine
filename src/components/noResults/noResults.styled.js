import styled from "styled-components"

export const NoResultsWrapper = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  flex-flow: column;
  -webkit-flex-flow: column;
  align-items: center;
  -webkit-align-items: center;
  padding: 10vw 0 10vw;
`
export const Message = styled.h3`
  font-size: 1.5em;
  text-align: center;
  font-weight: 500;
`
export const Tip = styled(Message)`
  font-size: 1.2em;
`
