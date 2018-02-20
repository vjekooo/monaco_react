
import React, { Component, Fragment } from 'react'

class MonacoEditor extends Component {
  constructor (props) {
    super(props)
    this.state = {
      code: null
    }
  }
  initMonaco () {
    window.require(['vs/editor/editor.main'], () => {
      if (typeof monaco !== 'undefined') {
        this.editor = window.monaco.editor.create(document.getElementById('monaco_container'), {
          value: this.state.current_scenario_script,
          language: 'javascript'
        })
        this.editor.onDidChangeModelContent((e) => {
          this.setState({page_edited: true, current_scenario_script: event.target.value})
        })
      }
    })
  }

  destroyMonaco () {
    if (typeof this.editor !== 'undefined') {
      this.editor.destroy()
    }
  }

  componentDidMount () {
    this.initMonaco()
  }

  componentWillUnmount () {
    this.destroyMonaco()
  }

  render () {
    return (
      <Fragment>
        <div id="monaco_container"></div>
      </Fragment>
    )
  }
}

export default MonacoEditor
