import HeaderIcons from "../HeaderIcons"
import HeaderOptions from "../HeaderOptions"
import Logo from "../Logo"
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: #ffffff;
    display: flex;
    justify-content: center;
  
`

export default function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <HeaderOptions />
            <HeaderIcons />
        </HeaderContainer>
    )
}