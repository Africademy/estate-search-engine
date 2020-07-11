import React, { useEffect, useRef } from "react"
import { Wrapper, Message } from "./error.styled"
import gsap from "gsap"
import { CSSPlugin } from "gsap/CSSPlugin"
import { EasePack } from "gsap/EasePack"
import { useSelector } from "react-redux"
gsap.registerPlugin(CSSPlugin)

const Error = () => {
  const error = useSelector(state => state.error)
  const errorRef = useRef()
  useEffect(() => {
    console.log("changed")
    if (error) {
      console.log("true")
      gsap.to(errorRef.current, {
        right: "5vw",
        duration: 0.7,
        ease: "expo.out",
      })
    } else {
      console.log("false")
      gsap.to(errorRef.current, {
        right: "-30vw",
        duration: 0.7,
        ease: "expo.out",
      })
    }
  }, [error])
  return (
    <Wrapper ref={errorRef} error={error}>
      <Message>Maximum price can't be lower than minimum</Message>
    </Wrapper>
  )
}

export default Error
