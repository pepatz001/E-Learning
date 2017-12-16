import React from 'react'

import CKEditor from 'react-ckeditor-wrapper'

class Default extends React.Component {

  componentWillMount() {
    this.props.history.replace('/admin')
  }

  render() {
    return (
      <div></div>
    )
  }
}

export default Default