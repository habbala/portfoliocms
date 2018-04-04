import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import './index.css';
import HomeScreen from './screens/home';
import registerServiceWorker from './registerServiceWorker';
import promise from 'redux-promise';

const contentful = require('contentful')

const client = contentful.createClient({
  space: 'q5d90ddpmtuz',
  accessToken: '8e5c9cbf2509af385100ca4224368f3296c167ff7dccb291a5f058819c4df1f3',
  host: 'cdn.contentful.com'
})

const App = () => (
  <Router>
    <div>
      <Route exact path = "/" render={()=>{ return <HomeScreen/>}}/>
    </div>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
