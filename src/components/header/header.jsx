import React, { createRef, Component } from "react"
import { navigate } from "gatsby"
import {
  HeaderWrapper,
  Logo,
  LogoSVG,
  Nav,
  NavItem,
  Dropdown,
  Item,
  Interaction,
  FavouritesIcon,
  AddAdvertBtn,
  SwitchLanguage,
  Polish,
  English,
  NavBtn,
} from "./header.styled"
import Heart from "../icons/favourites"
import Burger from "../burger/burger"
import logo from "../../static/icons/location.svg"
import { connect } from "react-redux"
import { switchLanguage } from "../actions/switchLanguage"
import { resetResults } from "../actions/resetResults"
import gsap from "gsap"
import { CSSPlugin } from "gsap/CSSPlugin"
import { EasePack } from "gsap/EasePack"

gsap.registerPlugin(CSSPlugin)

const mapStateToProps = state => ({
  favs: state.Favourites,
  toggle: state.ToggleModal,
  lang: state.SwitchLanguage,
})

class Header extends Component {
  constructor() {
    super()
    this.state = {
      scrolled: false,
      mark: false,
      types: [
        { key: 1, name: "Flat" },
        { key: 2, name: "House" },
        { key: 3, name: "Garage" },
        { key: 4, name: "Commercial" },
        { key: 5, name: "Parcels" },
        { key: 6, name: "Rooms" },
      ],
    }
    this.header = createRef()
    this.heart = createRef()
  }

  componentDidMount() {
    if (window) {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 100) {
          this.setState({ scrolled: true })
        } else {
          this.setState({ scrolled: false })
        }
      })
    }
  }
  componentDidUpdate() {
    const tl = gsap.timeline({ duration: 0.2, ease: "back.out(1.7)" })
    tl.to(this.heart.current, {
      y: -10,
    })
    tl.to(this.heart.current, {
      y: 0,
    })
  }

  linkToRent = () => {
    navigate("/rent")
  }
  linkToBuy = () => {
    navigate("/buy")
  }
  returnHome = () => {
    this.props.dispatch(resetResults())
    navigate("/")
  }

  render() {
    const { dispatch, lang, favs, toggle } = this.props
    return (
      <HeaderWrapper
        ref={this.header}
        toggle={toggle}
        scrolled={this.state.scrolled}
      >
        <Logo onClick={() => this.returnHome()} role="button">
          <LogoSVG src={logo} />
        </Logo>
        <Nav>
          <NavItem>
            <NavBtn onClick={() => this.linkToBuy()}>
              {lang ? "Buy" : "Kup"}
            </NavBtn>
            <Dropdown>
              {this.state.types.map(type => {
                return <Item key={type.key}>{type.name}</Item>
              })}
            </Dropdown>
          </NavItem>
          <NavBtn mark={this.state.mark} onClick={() => this.linkToRent()}>
            {lang ? "Rent" : "Wynajem"}
          </NavBtn>
          <NavBtn>{lang ? "Coming" : "Inwestycje"}</NavBtn>
        </Nav>
        <Interaction>
          <FavouritesIcon
            ref={this.heart}
            favs={favs.length}
            onClick={() => navigate("/favourites")}
          >
            <Heart height={"100%"} />
          </FavouritesIcon>
          <Burger />
          <AddAdvertBtn
            onClick={() => {
              navigate("/advertisement")
            }}
          >
            {lang ? "Add advertisement" : "Dodaj ogłoszenie"}
          </AddAdvertBtn>
          <SwitchLanguage>
            {lang ? (
              <Polish
                lang={lang.toString()}
                onClick={() => dispatch(switchLanguage())}
              >
                PL
              </Polish>
            ) : (
              <Polish
                disabled="disabled"
                lang={lang.toString()}
                onClick={() => dispatch(switchLanguage())}
              >
                PL
              </Polish>
            )}
            {lang ? (
              <English
                disabled="disabled"
                lang={lang}
                onClick={() => dispatch(switchLanguage())}
              >
                EN
              </English>
            ) : (
              <English lang={lang} onClick={() => dispatch(switchLanguage())}>
                EN
              </English>
            )}
          </SwitchLanguage>
        </Interaction>
      </HeaderWrapper>
    )
  }
}

export default connect(mapStateToProps)(Header)
