/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Card, Container, Divider, Grid, Header, Icon, Image, Menu, Segment, Tab } from 'semantic-ui-react';

/* Import components */
import Banner from '../components/Banner';
import Alumni from '../components/Member/Alumni';
import CurrentMS from '../components/Member/CurrentMS';
import CurrentMSCo_YCT from '../components/Member/CurrentMSCo_yct';
import CurrentMSCo_CCT from '../components/Member/CurrentMSCo_cct';
import PastStudents from '../components/Member/PastStudents';
import ResearchStudents from '../components/Member/ResearchStudents';
import Title from '../components/Title';

/* Define tab panes content */
const MemberPanes = [{
        menuItem: '目前指導學生',
        render: function() {
            return (
                <Tab.Pane>
                    <Title as='h3' icon='user circle' title_ch='碩士生' title_en='Current Graduate M.S. Students' />
                    <CurrentMS perRow={ 3 } />
                    <Divider />
                    <Title as='h3' icon='user circle outline' title_ch='共同指導碩士生 (與曾煜棋教授)' title_en='Current Co-advised Graduate M.S. Students (with Prof. Yu-Chee Tseng)' />
                    <CurrentMSCo_YCT perRow={ 3 } />
                    <Divider />
                    <Title as='h3' icon='user circle outline' title_ch='共同指導碩士生 (與曾建超教授)' title_en='Current Co-advised Graduate M.S. Students (with Prof. Chien-Chao Tseng)' />
                    <CurrentMSCo_CCT perRow={ 3 } />
                </Tab.Pane>
            );
        }
    }, {
        menuItem: '過去指導學生',
        render: function() {
            return (
                <Tab.Pane>
                    <Title as='h3' icon='student' title_ch='過去共同指導碩士生 (2016 年前)' title_en='Co-advised Graduate M.S. Students (Before 2016)' />
                    <PastStudents />
                </Tab.Pane>
            )
        }
    }, {
        menuItem: '畢業學生',
        render: function() {
            return (
                <Tab.Pane>
                    <Title as='h3' icon='student' title_ch='畢業學生' title_en='Alumni' />
                    <Alumni />    
                </Tab.Pane>
            )
        }
    }
];

/**
 * @class Member
 * @extends {React.Component}
 */
class Member extends React.Component {
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
                <Banner title_en='Member' title_ch='研究成員' type='member' />
                <Segment 
                    style={{
                        background: '#FFFFFF',
                        position: 'relative',
                        top: '-110px'
                    }}
                    vertical>
                    <Container>
                        <Tab menu={{ fluid: true, vertical: true }} panes={ MemberPanes } />
                    </Container>
                </Segment>
            </div>
        );
    }
}

/* Export module */
export default Member;