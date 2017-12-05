import React from 'react';
import CKEditor from 'react-ckeditor-wrapper';

class Ckeditor  extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
       content: this.props.ctn,
       }
   }

   updateContent(value) {
       this.setState({content:value})
   }

   render() {
       return (<CKEditor 
       value={this.state.content} 
       onChange={this.updateContent.bind(this)} />)
   }
}

export default Ckeditor;