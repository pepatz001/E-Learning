import React from 'react'
import localStorage from 'localStorage'

import { publishPost, getAllPosts , getDepartment , getUserDepartment } from '../api'
import CKEditor from 'react-ckeditor-wrapper'
import { Grid , Segment , Container, Divider, Dropdown, Header, Image, List, Menu , Button} from 'semantic-ui-react'

class Main extends React.Component {
  state = {
    department : "",
    code: "",
    contents: [],
    topics: [],
    activeItem: '',
  }

  mapContent = (list) => {
    var content = [{topic:"",name:"",code:""}]
    content = list.filter(item => item.name === this.state.department).map(list => list.content)
    const topic = []
    content.forEach( v => topic.indexOf(v.topic) === -1 ? topic.push(v.topic) : null)
    console.log(content,topic)
    this.setState({
      contents: content,
      topics: topic
    })
  }

  mapUser = (list) => {
    const item = list.filter(item => item.username === localStorage.username).map(item => item.department)
    this.setState({department: item[0]})
    localStorage.setItem('department', this.state.department)
    if(this.state.department === 'admin'){
      this.props.history.replace('/admin')
    } else {
      getDepartment()
      .then(data => this.mapContent(data))
      .catch(err => console.error('Something went wrong.'))
    }
  }

  componentWillMount() { 
    getUserDepartment()
    .then(user => this.mapUser(user))
    .catch(err => console.error('Something went wrong.'))
  }

  
  handleItemClick = (name,code) => {
    this.setState({ 
      activeItem: name,
      code: code
    })
  }

  logout = () => {
    this.props.history.replace('/login') //redirect
    localStorage.clear()
}

  render() {
    const { activeItem , topics , contents } = this.state
    return (
      <Grid>
        <Grid.Column width={2}>
          <Menu fixed='left' inverted vertical>
            <Container>
              <Menu.Item header>
                <Image size='massive' src='/assets/images/major-logo-1.png' style={{ marginLeft: '-0.1em' }} />
              </Menu.Item>
              <Menu.Item as='a' onClick={(e) => this.handleItemClick('','')} >Home</Menu.Item>
              { topics.length >= 0 ? //Javascript  //? คือ if else Syntax => ... ? true : false
                topics.map((item,index) => //Loop
                  <Menu.Item>
                    <Menu.Header>{item}</Menu.Header>
                    <Menu.Menu>
                      { contents.length >= 0 ? //Javascript  //? คือ if else Syntax => ... ? true : false
                        contents.filter(list => list.topic === item).map((thisItem) => //Loop
                          <Menu.Item name={thisItem.name} active={activeItem === thisItem.name} onClick={(e) => this.handleItemClick(thisItem.name,thisItem.code)} />
                        )
                        : null }
                    </Menu.Menu>
                  </Menu.Item>
                )
                : null }
              <Menu.Item as='a' onClick={(e) => this.logout()}>Log out</Menu.Item>
            </Container>
          </Menu>
        </Grid.Column>
        <Grid.Column width={14}>
          <Segment style={{ margin: '0 10px 0 25px' }} vertical>
            <Grid>
              <Grid.Column stretched width={16}>
                <Segment basic>
                  <div>
                    <div dangerouslySetInnerHTML={{ __html: this.state.code }}></div>
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