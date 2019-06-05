import React, {Component} from 'react';

class RatingModifier extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <label>Rate this contact up! </label>
                <div className={"ui icon button"}
                     onClick={this.props.buttonAction}>
                    <i className={"add icon"}/>
                </div>
            </div>
        );
    }
}

export default RatingModifier;