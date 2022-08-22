# doors
A logging library in javascript with various debug levels. 

import using
```js
const Logger = require('PATH/TO/DOORS/JS');
const ll = new Logger();
```

| HANDLES  | COLORS  | 
| :------: |:-------:| 
| success  | green   |
| info     | white   |
| response | cyan    |
| warning  | yellow  |
| critical | red     |

Labels are custom header you want to add to the stream, for example you can use custom error to log what type of error it is or any additional debug info.
