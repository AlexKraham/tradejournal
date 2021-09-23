import logo from './logo.svg'
import './App.css'

import { Auth } from 'aws-amplify'
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Test</h1>
        <AmplifySignOut />
      </header>
    </div>
  )
}

export default withAuthenticator(App)
