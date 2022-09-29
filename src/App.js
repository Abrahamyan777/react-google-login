import './App.css';
import Login from './componets/login';
import Logout from './componets/logout';
import { gapi } from 'gapi-script';
import { useEffect } from 'react';

function App() {
  const clientId = "386097249349-l7bvpuv5fvqr984drb2vlm2ajlou8ib8.apps.googleusercontent.com"

useEffect(() => {
  function start() {
      gapi.client.init({
        clientId: clientId,
          scope: ''
      })
  };
  gapi.load('client:auth2', start);
});

  return (
    <div className="App">
      <Login/>
      <Logout />
    </div>
  );
}

export default App;
