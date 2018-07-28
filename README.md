
how does reducer connect by redux 

1- create the model 

![](https://uploads.codesandbox.io/uploads/user/88233b0a-348f-44c1-8774-4518d4a4ddb2/eoB4-Screen%20Shot%202018-07-28%20at%2011.34.54%20PM.png
)

2- combine the model using redux 
import {combineReducers} from 'redux';

3- create store of the combined model using redux 
import { createStore } from 'redux';
4- pass it to the parent component  provider using react-redux
import { Provider } from 'react-redux';

5- receive it but connect and pass the state to props using react-redux
import {connect} from 'react-redux'

now props ready to be used and displayed 



