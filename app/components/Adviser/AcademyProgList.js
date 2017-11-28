/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { List } from 'semantic-ui-react';

/**
 * @class AcademyProgList
 * @extends {React.Component}
 */
class AcademyProgList extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        let dataArr = this.props.prog;

        return (
            <List bulleted horizontal selection>
                {
                    dataArr.map(function(item, i) {
                        return <List.Item>{ item }</List.Item>
                    })
                }
            </List>
        ); 
    }
}

export default AcademyProgList;