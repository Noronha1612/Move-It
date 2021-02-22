import ExperienceBar from './components/ExperienceBar';

import { MainContainer } from './AppStyles';
import { GlobalStyle } from './styles/global';

const App: React.FC = () => {
  return (
    <MainContainer>
      <ExperienceBar />
      <GlobalStyle />
    </MainContainer>
  );
}

export default App;
