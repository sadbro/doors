# doors-logger

A logging library in javascript with various debug levels.

import using

```js
const Logger = require('doors-logger');
const log = new Logger();

// the functions are:

log.SUCCESS(...);
log.INFO(...);
log.RESPONSE(...);
log.WARNING(...);
log.CRITICAL(...);

```


Each function has 2 parameters: label and content
label is the title of message and content is the body of message

```js
log.SUCCESS(label, message)
```

The above will produce the following result:

>[FILEPATH_FROM_WHICH_LOGGER_IS_CALLED][label][message]

| HANDLES  | COLORS  | 
| :------: |:-------:| 
| success  | green   |
| info     | white   |
| response | cyan    |
| warning  | yellow  |
| critical | red     |
