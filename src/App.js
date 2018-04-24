import React from 'react'
import { Provider } from 'react-redux'
import Redux from './configuration/Redux'
import Main from './Main'

const App = () => (
    <Provider store={Redux.createStore()}>
        <Main />
    </Provider>
)

export default App