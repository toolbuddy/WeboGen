/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Container, Grid, Menu, Segment, Tab } from 'semantic-ui-react';

/* Import components */
import Banner from '../components/Banner';
import Title from '../components/Title';

/* Define tab panes content */
const HonorPanes = [{
        menuItem: '獲獎殊榮',
        render: function() {
            return (
                <Tab.Pane>
                    <Title as='h3' icon='trophy' title_ch='獲獎殊榮' title_en='Honors' />
                </Tab.Pane>
            );
        }
    }, {
        menuItem: '實習',
        render: function() {
            return (
                <Tab.Pane>
                    <Title as='h3' icon='suitcase' title_ch='實習' title_en='Internship' />
                </Tab.Pane>
            )
        }
    }, {
        menuItem: '交換學生',
        render: function() {
            return (
                <Tab.Pane>
                    <Title as='h3' icon='world' title_ch='交換學生' title_en='Exchange Student' />
                </Tab.Pane>
            )
        }
    }, {
        menuItem: '國外短期研究',
        render: function() {
            return (
                <Tab.Pane>
                    <Title as='h3' icon='lab' title_ch='國外短期研究' title_en='Short-term Research' />
                </Tab.Pane>
            )
        }
    }
];

/**
 * @class Honors
 * @extends {React.Component}
 */
class Honors extends React.Component {
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
                <Banner title_en='Honors' title_ch='獲獎殊榮' />
                <Segment 
                    style={{
                        background: '#FFFFFF',
                        position: 'relative',
                        top: '-110px'
                    }}
                    vertical>
                    <Container>
                        <Tab menu={{ fluid: true, vertical: true }} panes={ HonorPanes } />
                    </Container>
                </Segment>
            </div>
        );
    }
}

/* Export module */
export default Honors;