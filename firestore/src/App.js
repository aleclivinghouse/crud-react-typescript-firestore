import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import * as firebase from 'firebase';
import 'firebase/firestore';
import Main from './Main';

class App extends React.Component {
  componentWillMount(){
    var config = {
    apiKey: "AIzaSyA4Y63dhqGgtZdB-XF1QiPzlL1lgdZghQM",
    authDomain: "typescript-crud.firebaseapp.com",
    databaseURL: "https://typescript-crud.firebaseio.com",
    projectId: "typescript-crud",
    storageBucket: "typescript-crud.appspot.com",
    messagingSenderId: "1073058016660"
    };
   firebase.initializeApp(config);
    firebase.firestore();
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
    <Provider store={store}>
      <div>
      <Main/>
      </div>
    </Provider>
    );
  }
}

export default App;
