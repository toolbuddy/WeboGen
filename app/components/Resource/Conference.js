/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { List } from 'semantic-ui-react';

/* Import components */
import ResourceListItem from './ResourceListItem';

/* Import data */
import conference from '../../data/Resource/conference.json';

/**
 * @class Conference
 * @extends {React.Component}
 */
class Conference extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let dataArr = [];
        Object.keys(conference.data).forEach(function(key) {
            dataArr.push(conference.data[key]);
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

export default Conference;