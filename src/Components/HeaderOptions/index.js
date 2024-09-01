import styled from 'styled-components'


const textoptions = ['CATEGORIES', 'FAVORITES', 'MY BOOKCASE']

const Options = styled.ul`
    display: flex;
`

const Option = styled.li`
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

export default function HeaderOptions() {
    return (
        <Options>
            {textoptions.map((text) => (
                <Option><p>{text}</p></Option>
            ))}
        </Options>
    )
}