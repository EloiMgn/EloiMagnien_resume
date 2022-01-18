import './App.scss';
import Header from '../Components/Header/Header';
import Cursorfollower from '../Components/Cursorfollower/Cursorfollower';
import Banner from '../Components/Banner/Banner';

const textArray=[
  'Bienvenue !', 
  'Je suis développeur front-End',
  'Je suis spécialisé en React'
];

const App= () => (
    <div className="App">
      <Cursorfollower />
      <div className='App__content'>
        <div className='App__content-header'>
          <Header />
        </div>
        <div className='App__content-body'>
          <Banner textArray={textArray}/>
        </div>
      </div>
    </div>
  );

export default App;
