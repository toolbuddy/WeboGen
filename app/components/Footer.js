/* Import modules */
import React from 'react';
import { Link } from 'react-router';

/* Import Semantic-UI React components */
import { Container, Grid, Item, Segment } from 'semantic-ui-react';

/* Import components */
import FooterItem from './FooterItem';
import FooterMap from './FooterMap';

/**
 * @class Footer
 * @extends {React.Component}
 */
class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        return (
            <div>
                <Segment 
                    style={{ 
                        backgroundColor: '#3e588f' 
                    }}
                    vertical>
                    <Container>
                        <Grid stackable>
                            <Grid.Row 
                                style={{ 
                                    margin: '2em 0 2em' 
                                }}>
                                <Grid.Column
                                    width={10}>
                                    <Item.Group>
                                        <FooterItem />
                                    </Item.Group>
                                </Grid.Column>
                                <Grid.Column
                                    floated='left'
                                    width={6}>
                                    <FooterMap />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Segment>
                <Segment vertical>
                    <Grid stackable>
                        <Grid.Row 
                            style={{ 
                                backgroundColor: '#203562', 
                                color: '#f5f5f5' 
                            }}>
                            <Grid.Column 
                                textAlign='center'>
                                &copy; 2017 Networking and Sensing Systems Laboratory (NSS Lab.), CS, NCTU. All rights reserved. 
                                Designed by <a href='https://github.com/yungshenglu' style={{ color: '#B9DAFC' }}>Yung-Sheng Lu</a>
                            </Grid.Column>  
                        </Grid.Row>
                    </Grid>
                </Segment>
            </div>
        );
    }
}

/* Export module */
export default Footer;