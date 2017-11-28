/* Import modules */
import React from 'react';
import { Link } from 'react-router';

/* Import Semantic-UI React components */
import { Container, Header, Item, Menu } from 'semantic-ui-react';

/* Import components */
import NavbarItem from './NavbarItem';

/* Import data */
import navbar from '../data/navbar.json';

/**
 * @class Navbar
 * @extends {React.Component}
 */
class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let dataArr = [];
        Object.keys(navbar.data).forEach(function(key) {
            dataArr.push(navbar.data[key]);
        });

        return (
            <Menu
                borderless={true}
                fixed='top'
                secondary
                size='large'
                style={{
                    backgroundColor: '#203562'
                }}>
                <Container text>
                    <Menu.Header>
                        <Menu.Item>
                            <Link to='/'>
                                <Header 
                                    as='h1' 
                                    textAlign='center' 
                                    style={{ 
                                        color: '#f5f5f5',
                                    }}>NSSLAB</Header>
                            </Link>
                        </Menu.Item>
                    </Menu.Header>
                    <Menu.Menu
                        color='red'
                        inverted
                        pointing
                        position='right'>
                        {
                            dataArr.map(function(item, i) {
                                return (
                                    <NavbarItem 
                                        item_ch={item.name['ch']} 
                                        item_en={item.name['en']} 
                                        to={item.link} />
                                );
                            })
                        }
                    </Menu.Menu>
                </Container>
            </Menu>
        );
    }
}

/* Export module */
export default Navbar;