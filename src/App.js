
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyButton from './components/buttonLayout';
import NavigationBar from './components/layouts/headerComponents';
import NavigationFooterBar from './components/layouts/footerComponents';
import MainBar from './components/main/index';

import AuthBar from './components/main/signup';



const welcome = {
  title: 'Secure Chat',
  describe: 'Securely chat with us now',
  link : 'https://i.imgur.com/yXOvdOSs.jpg'
};


function App() {
  return (
    <div className="App">
      <div className="row">
      <NavigationBar />
      <div className='header'>
        <div className='row'>
          <div className='col-12'>
          <MainBar />
          
         
          </div>
        </div>
     
      </div>
     
      </div>
      <footer>
      
      </footer>
    </div>
  );
}

export default App;
