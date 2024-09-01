import styled from 'styled-components'
import logo from '../../images/logo.svg'
import LogoText from '../../LogoText'


const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
`

const Logoimg = styled.img`
  margin-right: 10px;
`

export default function Logo (){
    return(
        <LogoContainer>
          <Logoimg src={logo} alt='alura books logo'/>
          <LogoText/>
        </LogoContainer>
    )
}