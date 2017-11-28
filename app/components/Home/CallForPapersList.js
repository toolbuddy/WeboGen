/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { List } from 'semantic-ui-react';

/* Import components */
import CallForPaperListItem from './CallForPaperListItem';

/* Import data */
import callForPaper from '../../data/Home/callForPaper.json';

/**
 * @class CallForPaperList
 * @extends {React.Component}
 */
class CallForPaperList extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {  
        let dataArr = [];
        Object.keys(callForPaper.data).forEach(function(key) {
            dataArr.push(callForPaper.data[key]);
        });

        return (
            <List selection verticalAlign='middle'>
                {
                    dataArr.map(function(item, i) {
                        return (
                            <CallForPaperListItem 
                                conf={item.conf} 
                                date={item.date} 
                                label={item.label}
                                link={item.link} />
                        );
                    })
                }
            </List>
        );
    }
}

/* Export module */
export default CallForPaperList;