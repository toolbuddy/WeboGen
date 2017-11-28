/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Container, Divider, Grid, Menu, Segment, Tab } from 'semantic-ui-react';

/* Import components */
import Banner from '../components/Banner';
import Conference from '../components/Resource/Conference';
import DigitalLibrary from '../components/Resource/DigitalLibrary';
import Laboratory from '../components/Resource/Laboratory';
import ResearchSociety from '../components/Resource/ResearchSociety';
import Misc from '../components/Resource/Misc';
import Title from '../components/Title';

/* Define tab panes content */
const ResourcePanes = [{
        menuItem: '研究資源',
        render: function() {
            return (
                <Tab.Pane>
                    <Title as='h3' icon='book' title_ch='數位圖書館' title_en='Digital Library' />
                    <DigitalLibrary />
                    <Divider />
                    <Title as='h3' icon='users' title_ch='研究社群' title_en='Research Society' />
                    <ResearchSociety />
                    <Divider />
                    <Title as='h3' icon='world' title_ch='研討會' title_en='Conferences' />
                    <Conference />
                    <Divider />
                    <Title as='h3' icon='puzzle' title_ch='其他資源' title_en='Misc' />
                    <Misc />
                </Tab.Pane>
            );
        }
    }, {
        menuItem: '實驗室資源',
        render: function() {
            return (
                <Tab.Pane>
                    <Title as='h3' icon='lab' title_ch='實驗室資源' title_en='Laboratory Resource' />
                    <Laboratory />
                </Tab.Pane>
            )
        }
    }
];

/**
 * @class Resource
 * @extends {React.Component}
 */
class Resource extends React.Component {
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
                <Banner title_en='Resource' title_ch='研究資源' type='resource' />
                <Segment 
                    style={{
                        background: '#FFFFFF',
                        position: 'relative',
                        top: '-110px'
                    }}
                    vertical>
                    <Container>
                        <Tab menu={{ fluid: true, vertical: true }} panes={ ResourcePanes } />
                    </Container>
                </Segment>
            </div>
        );
    }
}

/* Export module */
export default Resource;