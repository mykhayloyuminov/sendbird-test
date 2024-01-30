import '@sendbird/uikit-react/dist/index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat">
            <Chat
              userId={config.userId}
              nickname={config.nickname}
              theme={config.theme}
              useCustomQuery={config.useCustomQuery}
            />
          </Route>
          <Route path="/">
            <Login onSubmit={setconfig} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
