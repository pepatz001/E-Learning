import React from 'react'
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment , Button } from 'semantic-ui-react'

class MenuResponsive extends React.Component {
  
  state = { activeItem: 'bio' }
  
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render(){
    const { activeItem } = this.state

    return (
      <Menu fixed='left' inverted vertical>
        <Container>
          <Menu.Item header>
            <Image
              size='mini'
              src='/asset/images/logo.png'
              style={{ marginRight: '1.5em' }}
            />
            <br/>
            Project Name Responsive
          </Menu.Item>
          <Menu.Item as='a'>Home</Menu.Item>
          <Menu.Item>
            <Menu.Header>Products</Menu.Header>
            <Menu.Menu>
              <Menu.Item name='enterprise' active={activeItem === 'enterprise'} onClick={this.handleItemClick} />
              <Menu.Item name='consumer' active={activeItem === 'consumer'} onClick={this.handleItemClick} />
            </Menu.Menu>
          </Menu.Item>
          <Menu.Item>
            <Menu.Header>CMS Solutions</Menu.Header>
            <Menu.Menu>
              <Menu.Item name='rails' active={activeItem === 'rails'} onClick={this.handleItemClick} />
              <Menu.Item name='python' active={activeItem === 'python'} onClick={this.handleItemClick} />
              <Menu.Item name='php' active={activeItem === 'php'} onClick={this.handleItemClick} />
            </Menu.Menu>
          </Menu.Item>
          <Menu.Item>
            <Menu.Header>Hosting</Menu.Header>
            <Menu.Menu>
              <Menu.Item name='shared' active={activeItem === 'shared'} onClick={this.handleItemClick} />
              <Menu.Item name='dedicated' active={activeItem === 'dedicated'} onClick={this.handleItemClick} />
            </Menu.Menu>
          </Menu.Item>
          <Menu.Item>
            <Menu.Header>Support</Menu.Header>
            <Menu.Menu>
              <Menu.Item name='email' active={activeItem === 'email'} onClick={this.handleItemClick}>
                E-mail Support
              </Menu.Item>
              <Menu.Item name='faq' active={activeItem === 'faq'} onClick={this.handleItemClick}>
                FAQs
              </Menu.Item>
            </Menu.Menu>
          </Menu.Item>
        </Container>
      </Menu>
    )
  }
}

export default MenuResponsive

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