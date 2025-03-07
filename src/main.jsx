import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './redux/store.js'
import { UserProvider } from './Context/userContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </UserProvider>,
)
