/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { Grid, Image } from 'semantic-ui-react';

/**
 * @class VisitorsImgColumn
 * @extends {React.Component}
 */
class VisitorsImgColumn extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        return (
            <Grid.Column>
                <Image 
                    alt='Flag Counter' 
                    bordered={false} 
                    src={this.props.img} 
                    style={{
                        marginTop: '2em',
                        width: '95%'
                    }} />
            </Grid.Column>
        );
    }
}

/* Export module */
export default VisitorsImgColumn;