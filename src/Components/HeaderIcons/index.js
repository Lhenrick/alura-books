import styled from 'styled-components'
import profile from '../../images/perfil.svg'
import bag from '../../images/sacola.svg'

const Icon = styled.li`
  margin-right: 40px;
  width: 25px;
`
const Icons = styled.ul`
  display: flex;
  align-items: center;
`
const icons = [profile, bag]

export default function HeaderIcons(){
    return (
        <Icons>
              {icons.map((icon) => (
                <Icon><img src={icon} alt='options icon'></img></Icon>
              ))}
        </Icons>
    )
}