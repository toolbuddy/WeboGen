/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { List } from 'semantic-ui-react';

/* Import components */
import PapersList from './PapersList';

/* Import data */
import conferencePapers from '../../data/Adviser/conferencePapers.json';

/**
 * @class ConfPapers
 * @extends {React.Component}
 */
class ConfPapers extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let dataArr = [];
        Object.keys(conferencePapers.data).forEach(function(key) {
            dataArr.push(conferencePapers.data[key]);
        });

        return (
            <List 
                animated
                bulleted
                relaxed
                selection
                style={{
                    paddingLeft: '2.5em'
                }}>
                {
                    dataArr.map(function(papers, i) {
                        return (
                            <PapersList 
                                authors={papers.authors} 
                                date={papers.date}
                                link={papers.link}
                                publish={papers.publish} 
                                title={papers.title} 
                                type='conf'
                                unit={papers.unit} />
                            );
                    })
                }
            </List>
        );
    }
}

/* Export module */
export default ConfPapers;