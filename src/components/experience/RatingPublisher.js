import React, {Component} from 'react';

class RatingPublisher extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="ui mini statistics">
                    <div className="statistic">
                        <div className="value">
                            {this.props.mark}
                        </div>
                        <div className="label">
                            Current Rating
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RatingPublisher;