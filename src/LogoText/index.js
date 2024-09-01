import styled from "styled-components"

const LogoTextContainer = styled.div`
    display: flex;
`

export default function LogoText(){
    return(
        <LogoTextContainer>
            <p><strong>Alura</strong>Books</p>
        </LogoTextContainer>
    )
}