import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Amplify from 'aws-amplify'
import config from './aws-exports'

// import { withAuthenticator } from '@aws-amplify/ui-react'
// const AppWithAuth = withAuthenticator(App)

// const federated = {
//   googleClientId:
//     '563408246440-qkriha85adpecvbds5o6780jee2i4473.apps.googleusercontent.com',
// }

Amplify.configure(config)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
