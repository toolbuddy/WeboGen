/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { List } from 'semantic-ui-react';

/* Import components */
import ResourceListItem from './ResourceListItem';

/* Import data */
import researchSoc from '../../data/Resource/researchSoc.json';

/**
 * @class ResearchSociety
 * @extends {React.Component}
 */
class ResearchSociety extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let dataArr = [];
        Object.keys(researchSoc.data).forEach(function(key) {
            dataArr.push(researchSoc.data[key]);
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

export default ResearchSociety;