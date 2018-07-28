
how does reducer connect by redux 

1- create the model 

![](https://uploads.codesandbox.io/uploads/user/88233b0a-348f-44c1-8774-4518d4a4ddb2/eoB4-Screen%20Shot%202018-07-28%20at%2011.34.54%20PM.png
)

2- combine the model using redux 
import {combineReducers} from 'redux';

![](https://uploads.codesandbox.io/uploads/user/88233b0a-348f-44c1-8774-4518d4a4ddb2/Wedj-Screen%20Shot%202018-07-28%20at%2011.35.07%20PM.png
)

3- create store of the combined model using redux 
import { createStore } from 'redux';

4- pass it to the parent component  provider using react-redux
import { Provider } from 'react-redux';

![](https://uploads.codesandbox.io/uploads/user/88233b0a-348f-44c1-8774-4518d4a4ddb2/efGw-Screen%20Shot%202018-07-28%20at%2011.35.15%20PM.png
)
![](https://uploads.codesandbox.io/uploads/user/88233b0a-348f-44c1-8774-4518d4a4ddb2/03tg-Screen%20Shot%202018-07-28%20at%2011.35.55%20PM.png
)

5- receive it but connect and pass the state to props using react-redux
import {connect} from 'react-redux'

![](https://uploads.codesandbox.io/uploads/user/88233b0a-348f-44c1-8774-4518d4a4ddb2/MgyS-Screen%20Shot%202018-07-28%20at%2011.36.22%20PM.png
)

now props ready to be used and displayed 

![](https://uploads.codesandbox.io/uploads/user/88233b0a-348f-44c1-8774-4518d4a4ddb2/TZAy-Screen%20Shot%202018-07-28%20at%2011.52.41%20PM.png
)



