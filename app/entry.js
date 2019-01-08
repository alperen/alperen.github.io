import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'mobx-react';

import App from './App';
import store from './store';

const AppWithStore = (store) => {
    return <Provider store={store}>
        <App />
    </Provider>;
}

ReactDOM.render(<AppWithStore store={store} />,document.getElementById("app"));