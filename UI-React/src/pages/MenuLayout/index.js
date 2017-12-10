import React from 'react'
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment , Button } from 'semantic-ui-react'

class MenuLayout extends React.Component {
  
  state = { 
    activeItem: 'bio',
    //data : this.props.data
  }
  
  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render(){
    const { activeItem } = this.state

    return (
      <Menu fixed='left' inverted vertical>
        <Container>
          <Menu.Item header>
            <Image size='massive' src='/asset/images/major-logo-1.png' style={{ marginLeft: '-0.1em' }} />
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
          <Menu.Item as='a'>Log out</Menu.Item>
        </Container>
      </Menu>
    )
  }
}

export default MenuLayout