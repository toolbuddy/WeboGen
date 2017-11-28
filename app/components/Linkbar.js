/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Grid, List, Segment } from 'semantic-ui-react';

/* Import components */
import LinkbarItem from './LinkbarItem';

/* Import data */
import linkbar from '../data/Home/linkbar.json';

/**
 * @class Linkbar
 * @extends {React.Component}
 */
class Linkbar extends React.Component {
     constructor(props) {
         super(props);
         this.onChange = this.onChange.bind(this);
     }

     onChange(state) {
         this.setState(state);
     }

     render() {
        let dataArr = [];
        Object.keys(linkbar.data).forEach(function(key) {
            dataArr.push(linkbar.data[key]);
        });

         return (
            <Segment
                secondary 
                style={{ 
                    backgroundColor: '#c0c5cd' 
                }} 
                textAlign='center'
                vertical>
                <Grid 
                    container 
                    stackable 
                    verticalAlign='middle'>
                    <Grid.Row>
                        <List 
                            bulleted 
                            horizontal 
                            style={{ 
                                color: '#203562' 
                            }}>
                            {
                                dataArr.map(function(item, i) {
                                    return (
                                        <LinkbarItem 
                                            link={item.link} 
                                            name={item.name.ch} />
                                    );
                                })
                            }
                        </List>
                    </Grid.Row>
                </Grid>
            </Segment>
         );
     }
}

/* Export module */
export default Linkbar;