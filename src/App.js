import Header from './Components/Header';
import styled from 'styled-components';
import Search from './Components/Search';
import LatestReleases from './Components/LatestReleases';


const AppContainer = styled.div`

      width: 100vw;
      height: 100vh;
      background-image: linear-gradient(90deg, #002F52 35%, #326589);


`

function App() {
  return (
    <AppContainer>
      <Header />
      <Search/>
      <LatestReleases/>
    </AppContainer>
  );
}

export default App;
