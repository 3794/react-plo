# REACT-PLO
```shell
npm i react-plo
```

## Example
```javascript
import React from 'react';
import { createModel } from 'plo'
import { connect } from 'react-plo'

const [counterModel, counterSub] = createModel({
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
      <button onClick={counterModel.inc}>+</button>
      <button onClick={counterModel.dec}>-</button>
      count: {counterModel.getCount()}
    </div>
  );
}

export default connect([counterSub])(App);
```
