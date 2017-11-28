/* Import modules */
import React from 'react';

/* Import Semantic-UI React components */
import { List } from 'semantic-ui-react';

/**
 * @class LinkbarItem
 * @extends {React.Component}
 */
class LinkbarItem extends React.Component {
     constructor(props) {
         super(props);
         this.onChange = this.onChange.bind(this);
     }

     onChange(state) {
         this.setState(state);
     }

     render() {
         return (
            <List.Item as='a' href={this.props.link} style={{ color: '#3e588f' }}>{ this.props.name }</List.Item>
         );
     }
}

/* Export module */
export default LinkbarItem;