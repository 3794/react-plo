import React from 'react'

export function connect(subscribes) {
  return function(WrapperComponent) {
    return class extends React.Component {
      render() {
        return <WrapperComponent {...this.props} />
      }

      componentDidMount() {
        this.unsubscribes = subscribes.map(subscribe => {
          return subscribe(() => this.forceUpdate())
        })
      }

      componentWillUnmount() {
        this.unsubscribes.map(unsubscribe => unsubscribe())
      }
    }
  }
}

// test
