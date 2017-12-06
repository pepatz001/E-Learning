import React from 'react'
import localStorage from 'localStorage'

import { publishPost, getAllPosts , getDepartment } from '../api'
import Ckeditor from './Ckeditor'
import MenuLayout from './MenuLayout'
import MenuResponsive from './MenuResponsive'
import { Grid , Segment } from 'semantic-ui-react'

class Main extends React.Component {
  state = {
    code: "<p>Test</p>"
  }

  mapContent = (Data) => {
    console.log(Data.filter((e) =>  e.name === "marketing").map(e => e.content.code))
    this.setState({code: Data.filter((e) =>  e.name === "marketing").map(e => e.content.code)[0]})
  }

  getDepartment_n = () => {
    getDepartment()
    .then(data => this.mapContent(data)[0])
    .then(console.log(this.state.code))
    .catch(err => console.error('Something went wrong.'))
  }

  componentWillMount() { 
    this.getDepartment_n()
  }

  render() {
    const datatest1 = this.state.datatest
    return (
      <Grid>
        <Grid.Column only='computer' width={2}>
          <MenuLayout />
        </Grid.Column>
        <Grid.Column only='mobile' width={2}>
          <MenuResponsive />
        </Grid.Column>
        <Grid.Column width={14}>
          <Segment style={{ margin: '0 10px 0 25px' }} vertical>
            <Grid>
              <Grid.Column stretched width={16}>
                <Segment basic>
                  <h1>{localStorage.username}</h1>
                  <div class='ckeditor'>
                    {console.log(this.state.code)}
                    <Ckeditor ctn={this.state.code}/>
                    <Ckeditor ctn='<h1>test</h1>'/>
                  </div>
                </Segment>
              </Grid.Column>
            </Grid>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Main