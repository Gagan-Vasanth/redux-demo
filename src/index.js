import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import store from './store/store';


const firebaseConfig = {
  apiKey: "AIzaSyC2LGo-LFjVokfz6JY1Y3erGzg9Pi1Jpog",
  authDomain: "redux-demo-697fa.firebaseapp.com",
  projectId: "redux-demo-697fa",
  storageBucket: "redux-demo-697fa.appspot.com",
  messagingSenderId: "291041965762",
  appId: "1:291041965762:web:3f1c148cb46c65708eed5b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


