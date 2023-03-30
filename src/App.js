
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyButton from './components/buttonLayout';
import navigationBar from './components/layouts/headerComponents';


const welcome = {
  title: 'Secure Chat',
  describe: 'Securely chat with us now',
  link : 'https://i.imgur.com/yXOvdOSs.jpg'
};


function App() {
  return (
    <div className="App">
       
      <div className="row">
      <div>
      <p>
          {welcome.describe}
      </p>
      </div>
      <MyButton />
      <navigationBar />
      </div>
    </div>
  );
}

export default App;
