/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Container, Divider, Grid, Menu, Segment, Tab } from 'semantic-ui-react';

/* Import components */
import Banner from '../components/Banner';
import GrantsMOST from '../components/Research/GrantsMOST';
import GrantsSinica from '../components/Research/GrantsSinica';
import GrantsCoop from '../components/Research/GrantsCoop';
import Subject from '../components/Research/Subject';
import Result from '../components/Research/Result';
import Title from '../components/Title';

/* Define tab panes content */
const ResearchPanes = [ {
        menuItem: '研究方向',
        render: function() {
            return (
                <Tab.Pane>
                    <Subject />
                </Tab.Pane>
            )
        }
    }, {
        menuItem: '研究成果',
        render: function() {
            return (
                <Tab.Pane>
                    <Title as='h3' icon='idea' title_ch='研究成果' title_en='Project' />
                    <Result />    
                </Tab.Pane>
            );
        }
    }, {
        menuItem: '研究計畫',
        render: function() {
            return (
                <Tab.Pane>
                    <Title as='h3' icon='tasks' title_ch='科技部研究計畫' title_en='Ministry of Science and Technology (MOST) Project' />
                    <GrantsMOST />
                    <Divider />
                    <Title as='h3' icon='tasks' title_ch='中央研究院研究計畫' title_en='Academia Sinica Project' />
                    <GrantsSinica />
                    <Divider />
                    <Title as='h3' icon='tasks' title_ch='合作研究計畫' title_en='Cooperation Project' />
                    <GrantsCoop />
                </Tab.Pane>
            )
        }
    }
];

/**
 * @class Research
 * @extends {React.Component}
 */
class Research extends React.Component {
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
                <Banner title_en='Research' title_ch='研究方向' type='research' />
                <Segment 
                    style={{
                        background: '#FFFFFF',
                        position: 'relative',
                        top: '-110px'
                    }}
                    vertical>
                    <Container>
                        <Tab menu={{ fluid: true, vertical: true }} panes={ ResearchPanes } />
                    </Container>
                </Segment>
            </div>
        );
    }
}

/* Export module */
export default Research;