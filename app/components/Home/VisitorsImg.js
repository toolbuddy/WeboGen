/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Grid } from 'semantic-ui-react';

/* Import components */
import VisitorsImgColumn from './VisitorsImgColumn';

/* Import data */
import visitors from '../../data/Home/visitors.json';

/**
 * @class VisitorsImg
 * @extends {React.Component}
 */
class VisitorsImg extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let dataArr = [];
        Object.keys(visitors.data).forEach(function(key) {
            dataArr.push(visitors.data[key]);
        });

        return (
            <Grid.Row>
                <VisitorsImgColumn img={dataArr[0]['map']} />
                <VisitorsImgColumn img={dataArr[0]['count']} />
            </Grid.Row>
        );
    }
}

/* Export module */
export default VisitorsImg;