/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Divider, Label } from 'semantic-ui-react';

/* Import components */
import CoursesAbout from './CoursesAbout';
import Schedule from './Schedule';
import Instructors from './Instructors';
import Assistants from './Assistants';
import Textbooks from './Textbooks';
import Grading from './Grading';
import Lectures from './Lectures';
import Title from '../Title';

/* Import data */
import mmcom2017 from '../../data/Courses/mmcom2017.json';

/**
 * @class MMCOM2017
 * @extends {React.Component}
 */
class MMCOM2017 extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() { 
        let dataArr = [];
        Object.keys(mmcom2017.data).forEach(function(key) {
            dataArr.push(mmcom2017.data[key]);
        });
        
        return (
            <div>
                <Label 
                    color='green' 
                    ribbon='left'>{ dataArr[0].sem }
                    <Label.Detail>{ dataArr[0].grade }</Label.Detail>
                </Label>
                <Title 
                    as='h3' 
                    icon='university' 
                    title_en={dataArr[0].title['en']} 
                    title_ch={dataArr[0].title['ch']} />
                <Title 
                    as='h4' 
                    icon='info circle' 
                    title_ch='關於課程' 
                    title_en='About' />
                <CoursesAbout 
                    about={dataArr[0].about} 
                    website={dataArr[0].website} />
                <Divider section />
                <Title 
                    as='h4' 
                    icon='calendar' 
                    title_ch='課程時程' 
                    title_en='Schedule' />
                <Schedule 
                    classes={dataArr[0].classes} 
                    exams={dataArr[0].exams} />
                <Divider section />
                <Title 
                    as='h4' 
                    icon='user' 
                    title_ch='授課教師' 
                    title_en='Instructor' />
                <Instructors 
                    instructors={dataArr[0].instructors} />
                <Divider section />
                <Title 
                    as='h4' 
                    icon='group' 
                    title_ch='課程助教' 
                    title_en='Teaching Assistants' />
                <Assistants 
                    assistants={dataArr[0].assistants} />
                <Divider section />
                <Title 
                    as='h4' 
                    icon='book' 
                    title_ch='課程用書' 
                    title_en='Textbook' />
                <Textbooks 
                    textbooks={dataArr[0].textbooks} />
                <Divider section />
                <Title 
                    as='h4' 
                    icon='pie chart' 
                    title_ch='課程計分' 
                    title_en='Grading' />
                <Grading 
                    grading={dataArr[0].grading} />
                <Divider section />
                <Title 
                    as='h4' 
                    icon='list layout' 
                    title_ch='課程內容' 
                    title_en='Lectures' />
                <Lectures 
                    lectures={dataArr[0].lectures} />
            </div>
        );
    }
}

/* Export module */
export default MMCOM2017;