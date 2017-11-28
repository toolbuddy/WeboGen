/* Import modules */
import React from 'react';
import { Link } from 'react-router';

/* Import Semantic-UI React components */
import { Header, Menu } from 'semantic-ui-react';

class NavbarItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
        this.state = { 
            activeItem: '/' 
        };
    }

    handleItemClick(e, { name }) {
        this.setState({ 
            activeItem: name
        });
    } 

    render() {
        if (this.state.activeItem != this.props.to) {
            return (
                <Link
                    to={this.props.to}>
                    <Menu.Item
                        name={this.props.to}
                        active={
                            this.state.activeItem === this.props.to
                        }
                        onClick={this.handleItemClick}>
                        <Header 
                            as='h4' 
                            textAlign='center'>
                            <Header.Content 
                                style={{ 
                                    color: '#ffe495'
                                }}>{ this.props.item_ch }
                                <Header.Subheader 
                                    as='p' 
                                    style={{ 
                                        color: '#fefaec' 
                                    }}>{ this.props.item_en }</Header.Subheader>
                            </Header.Content>
                        </Header>
                    </Menu.Item>
                </Link>
            );
        } else {
            return (
                <Link
                    to={this.props.to}>
                    <Menu.Item
                        name={this.props.to}
                        active={
                            this.state.activeItem != this.props.to
                        }
                        onClick={this.handleItemClick}>
                        <Header 
                            as='h4' 
                            textAlign='center'>
                            <Header.Content 
                                style={{ 
                                    color: '#ffe495'
                                }}>{ this.props.item_ch }
                                <Header.Subheader 
                                    as='p' 
                                    style={{ 
                                        color: '#fefaec' 
                                    }}>{ this.props.item_en }</Header.Subheader>
                            </Header.Content>
                        </Header>
                    </Menu.Item>
                </Link>
            );
        }
    }
}

/* Export module */
export default NavbarItem;