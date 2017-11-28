/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { List } from 'semantic-ui-react';

/* Import components */
import ResourceListItem from './ResourceListItem';

/* Import data */
import digitalLib from '../../data/Resource/digitalLib.json';

/**
 * @class DigitalLibrary
 * @extends {React.Component}
 */
class DigitalLibrary extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let dataArr = [];
        Object.keys(digitalLib.data).forEach(function(key) {
            dataArr.push(digitalLib.data[key]);
        });

        return (
            <List 
                animated
                selection
                style={{
                    paddingLeft: '2.5em'
                }}>
                {
                    dataArr.map(function(item, i) {
                        return (
                            <ResourceListItem 
                                icon={'mouse pointer'} 
                                link={item.link} 
                                name={item.name}
                                type='link' />
                            );
                    })
                }
            </List>
        );
    }
}

export default DigitalLibrary;