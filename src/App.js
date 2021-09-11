import './App.css'
import React from 'react'
import Routes from './routes/Routes'
import Header from './components/Navbar/Header'
import {Provider} from 'react-redux'
import {persistor, store} from './stores'
import {BrowserRouter} from 'react-router-dom'
import {PersistGate} from 'redux-persist/integration/react'

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null}
                         persistor={persistor}>
                <BrowserRouter>
                    <Header />
                    <Routes />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    )
}

export default App
