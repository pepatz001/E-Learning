import React from 'react'
import localStorage from 'localStorage'
import './Main.css'

import _ from 'lodash'
import { publishPost, getAllPosts , getDepartment , getUserDepartment } from '../api'
import CKEditor from 'react-ckeditor-wrapper'
import { Divider , Dropdown, Container, Icon, Image, Menu, Sidebar, Responsive, Segment, Grid } from "semantic-ui-react"

class Main extends React.Component {
  state = {
    department : "",
    code: "",
    contents: [],
    topics: [],
    activeItem: '',
    active: ''
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

  handleClick = (e, { name }) => this.setState({ active: name })

  logout = () => {
    this.props.history.replace('/login') //redirect
    localStorage.clear()
  }

  render() {
    const { activeItem , topics , contents } = this.state
    const { active } = this.state
    return (
      <div className='body'>
        {/* <NavBar leftItems={leftItems} rightItems={rightItems} ></NavBar> */}
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Menu className='navbar' fixed='Top' borderless>
            <Menu.Item>
              <Image size="tiny" src='/assets/images/major-logo-1.png' />
            </Menu.Item>
            <Menu.Item className='navbarItem' key='Case Study' name='Case Study' active={active === 'Case Study'} onClick={this.handleClick} />
            <Menu.Item className='navbarItem' key='quiz' name='quiz' active={active === 'quiz'} onClick={this.handleClick} />
            <Menu.Item className='navbarItem' key='ranking' name='ranking' active={active === 'ranking'} onClick={this.handleClick} />
            <Dropdown item text={this.state.department}>
              <Dropdown.Menu>
                { topics.length >= 0 ? //Javascript  //? คือ if else Syntax => ... ? true : false
                      topics.map((item,index) => //Loop
                      <Dropdown.Item>{item}</Dropdown.Item>
                      )
                      : null }
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Menu position="right">
              <Menu.Item className='navbarItem' key='logout' name='logout' onClick={(e) => this.logout()} />
            </Menu.Menu>
          </Menu>
          <Segment textAlign='center'>
            <Grid>
              <Grid.Column width={3}>
                <Menu inverted vertical>
                  <Container>
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
                  </Container>
                </Menu>
              </Grid.Column>
              <Grid.Column width={13}>
                <Segment style={{ margin: '0 10px 0 25px' }} vertical>
                  <Grid>
                    <Grid.Column stretched width={16}>
                      <Segment basic textAlign='left'>
                        <h2>{this.state.activeItem}</h2>
                        <Divider />
                        <div>
                          <div dangerouslySetInnerHTML={{ __html: this.state.code }}></div>
                        </div>
                      </Segment>
                    </Grid.Column>
                  </Grid>
                </Segment>
              </Grid.Column>
            </Grid>
          </Segment>
          <div class="ui one vertical bottom fixed item menu footer">
            <Image src='/assets/images/partner.png' size='large' centered/>
            <Container textAlign='center'>
              Copyright © 2015 Major Cineplex Group Plc. All original contents of www.majorcineplex.com ("Site") <br/>
              including text, graphics, interfaces and design thereof are all rights reserved.
            </Container>
          </div>
        </Responsive>
      </div>
    )
  }
}

// const NavBarMobile = ({
//   children,
//   leftItems,
//   onPusherClick,
//   onToggle,
//   rightItems,
//   visible
// }) => (
//   <Sidebar.Pushable>
//     <Sidebar
//       as={Menu}
//       animation="overlay"
//       icon="labeled"
//       inverted
//       items={leftItems}
//       vertical
//       visible={visible}
//     />
//     <Sidebar.Pusher
//       dimmed={visible}
//       onClick={onPusherClick}
//       style={{ minHeight: "100vh" }}
//     >
//       <Menu fixed="top" inverted>
//         <Menu.Item>
//           <Image size="tiny" src='/assets/images/major-logo-1.png' />
//         </Menu.Item>
//         <Menu.Item onClick={onToggle}>
//           <Icon name="sidebar" />
//         </Menu.Item>
//         <Menu.Menu position="right">
//           {_.map(rightItems, item => <Menu.Item {...item} />)}
//         </Menu.Menu>
//       </Menu>
//       {children}
//     </Sidebar.Pusher>
//   </Sidebar.Pushable>
// )

// const NavBarChildren = ({ children }) => (
//   <Container style={{ marginTop: "2.5em" }}>{children}</Container>
// )

// class NavBar extends React.Component {
//   state = {
//     visible: false,
//     active: ''
//   }

//   handlePusher = () => {
//     const { visible } = this.state

//     if (visible) this.setState({ visible: false })
//   }

//   handleToggle = () => this.setState({ visible: !this.state.visible })

//   handleClick = (e, { name }) => this.setState({ active: name })

//   render() {
//     const { children, leftItems, rightItems } = this.props
//     const { visible } = this.state
//     const { active } = this.state
//     return (
//       <div>
//         <Responsive {...Responsive.onlyMobile}>
//           <NavBarMobile
//             leftItems={leftItems}
//             onPusherClick={this.handlePusher}
//             onToggle={this.handleToggle}
//             rightItems={rightItems}
//             visible={visible}
//           >
//             <NavBarChildren>{children}</NavBarChildren>
//           </NavBarMobile>
//         </Responsive>
//       </div>
//     )
//   }
// }


export default Main