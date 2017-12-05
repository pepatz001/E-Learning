import React from 'react'
import localStorage from 'localStorage'

import { publishPost, getAllPosts , getTest } from '../api'
import Ckeditor from './Ckeditor'
import MenuLayout from './MenuLayout'
import MenuResponsive from './MenuResponsive'
import { Grid , Segment } from 'semantic-ui-react'

class Main extends React.Component {
  state = {
    datatest: []
  }

  getTest1 = () => {
    getTest()
    .then(data => this.setState({ datatest: data }))
    .catch(err => console.error('Something went wrong.'))
  }

  componentDidMount() { 
    this.getTest1()
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
                  <h1>This is an stretched grid column. This segment will always match the tab height</h1>
                  <div class='ckeditor'>
                    <Ckeditor ctn='<h1>This is an stretched grid column. This segment will always match the tab height</h1>'/>
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