import React from "react"
import { Wrapper, Message, Status, Emoji } from "./foundNothing.styled"
import confusedEmoji from "../../static/icons/confused.png"

const FoundNothing = () => {
  return (
    <Wrapper>
      <Status>
        <Emoji src={confusedEmoji} />{" "}
        <span style={{ opacity: 0.3 }}>No result in this category</span>
      </Status>
      <Message>Maybe your dreams have a bit different address</Message>
    </Wrapper>
  )
}

export default FoundNothing
