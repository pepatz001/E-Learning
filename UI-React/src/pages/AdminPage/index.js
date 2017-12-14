import React from 'react';
import { Tab } from 'semantic-ui-react'
import Users from '../Users'
import Departments from '../Departments'

class AdminPage extends React.Component {
    state = { activeItem: 'home' }
    
    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
    }

    logout = () => {
        this.props.history.replace('/login') //redirect
        localStorage.clear()
    }

    render() {
        const { activeItem } = this.state
        const panes = [
            { menuItem: { content: 'Users'}, render: () => <Tab.Pane attached={false}><Users history={this.props.history}/></Tab.Pane> },
            { menuItem: { content: 'Departments'}, render: () => <Tab.Pane attached={false}><Departments history={this.props.history}/></Tab.Pane> },
            { menuItem: { content: 'Log out' , icon: 'shutdown' , position: 'right' } , render: () => this.logout()}
          ]

        return (
            <div>
                <Tab menu={{ color:'black', inverted: true, attached: false, tabular: false }} panes={panes}/>
            </div>
        );
    }
}

export default AdminPage;