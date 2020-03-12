# REACT-PLO
```shell
npm i react-plo
```

## Example
```javascript
import React from 'react';
import { createModel } from 'plo'
import { connect } from 'react-plo'

const [model, sub] = createModel({
  count: 0, 
  getCount() {
    return this.count
  },
  inc() { 
    this.count += 1 
  },
  dec() {
    this.count -= 1
  }
})

function App() {
  return (
    <div>
      <button onClick={model.inc}>+</button>
      <button onClick={model.dec}>-</button>
      count: {model.getCount()}
    </div>
  );
}

export default connect([sub])(App);
```
