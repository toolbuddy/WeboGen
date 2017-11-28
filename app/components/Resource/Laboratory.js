/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { List } from 'semantic-ui-react';

/* Import components */
import ResourceListItem from './ResourceListItem';

/* Import data */
import laboratory from '../../data/Resource/laboratory.json';

/**
 * @class Laboratory
 * @extends {React.Component}
 */
class Laboratory extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let dataArr = [];
        Object.keys(laboratory.data).forEach(function(key) {
            dataArr.push(laboratory.data[key]);
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
                                icon={'cloud download'} 
                                link={item.link} 
                                name={item.name}
                                type='download' />
                            );
                    })
                }
            </List>
        );
    }
}

export default Laboratory;