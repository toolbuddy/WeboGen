/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Container, Divider, Grid, Label, Menu, Segment, Tab } from 'semantic-ui-react';

/* Import components */
import Banner from '../components/Banner';
import CN2017 from '../components/Courses/CN2017';
import MMCOM2017 from '../components/Courses/MMCOM2017';
import Title from '../components/Title';
import WCS2016 from '../components/Courses/WCS2016';

/* Define tab panes content */
const CoursesPanes = [{
        menuItem: '計算機網路概論 / 2017 Fall',
        render: function() {
            return (
                <Tab.Pane>
                    <CN2017 />
                </Tab.Pane>
            );
        }
    }, {
        menuItem: '多媒體通訊 / 2017 Spring',
        render: function() {
            return (
                <Tab.Pane>
                    <MMCOM2017 />
                </Tab.Pane>
            )
        }
    }, {
        menuItem: '無線通訊系統 / 2016 Fall',
        render: function() {
            return (
                <Tab.Pane>
                    <WCS2016 />
                </Tab.Pane>
            )
        }
    }
];

/**
 * @class Courses
 * @extends {React.Component}
 */
class Courses extends React.Component {
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
                <Banner 
                    title_en='Courses' 
                    title_ch='課程資訊' 
                    type='courses' />
                <Segment 
                    style={{
                        background: '#FFFFFF',
                        position: 'relative',
                        top: '-110px'
                    }}
                    vertical>
                    <Container>
                        <Tab 
                            menu={{ 
                                fluid: true, 
                                vertical: true }} 
                            panes={ CoursesPanes } />
                    </Container>
                </Segment>
            </div>
        );
    }
}

/* Export module */
export default Courses;