import React from 'react';
import ReactDOM from 'react-dom';
import RouteTree from './Containers/main';
import thunk from 'redux-thunk';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHighlighter, faEye, faCalendar, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import Reducers from './Redux/Reducers';
import './Style/lib.css';
import './Style/style.css';


library.add(faHighlighter, faEye, faCalendar, faArrowLeft)

const middleware = applyMiddleware(thunk);
const store = createStore(Reducers, middleware);

ReactDOM.render(
        <Provider store={store}>
            <RouteTree />
        </Provider>, document.getElementById('root'));
