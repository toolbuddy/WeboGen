/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { List } from 'semantic-ui-react';

/* Import components */
import PapersList from './PapersList';

/* Import data */
import journalPapers from '../../data/Adviser/journalPapers.json';

/**
 * @class JourPapers
 * @extends {React.Component}
 */
class JourPapers extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let dataArr = [];
        Object.keys(journalPapers.data).forEach(function(key) {
            dataArr.push(journalPapers.data[key]);
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
                                no={papers.no} 
                                pp={papers.pp} 
                                publish={papers.publish} 
                                title={papers.title} 
                                type='jour'
                                unit={papers.unit}
                                vol={papers.vol} />
                        );
                    })
                }
            </List>
        );
    }
}

/* Export module */
export default JourPapers;