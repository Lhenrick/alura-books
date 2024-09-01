import RecomendationCard from '../RecomendationCard'
import { Title } from '../Title'
import { books } from './latestReleasesData'
import bookImage from '../../images/livro2.png'
import styled from 'styled-components'

const LatestReleasesContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NewBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

export default function LatestReleases() {
    return (
        <LatestReleasesContainer>
            <Title
                color='#EB9B00'
                fontSize='36px'
                align='center'>Latest Releases</Title>
            <NewBooksContainer>
                {books.map(book => (
                    <img src={book.src} alt='book image' />
                ))}
            </NewBooksContainer>
            <RecomendationCard 
            title='Maybe you have an interest for...'
            subtitle='Angular 11'
            description='Building an aplication with the google platform'
            img={bookImage}
            />
        </LatestReleasesContainer>
    )
}