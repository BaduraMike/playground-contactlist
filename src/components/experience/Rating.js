import React, {Component} from 'react';

class Rating extends Component {
    constructor(props) {
        super(props);
        this.state = {mark: 0};
    }

    render() {
        return (
            <div>
                <div className="ui form">
                    <div className="field">
                        <label>Rating</label>
                    </div>
                    <div className={"ui icon input"}>
                    <input type={"text"}
                           name={"mark"}
                           placeholder="Propose your rating."
                           value={this.state.mark}
                           onChange={this.handleChange.bind(this)}
                    />
                    <i className={"inverted circular check link icon"}
                       onClick={this.onSubmit.bind(this)}/>
                    </div>
                </div>
            </div>
        );
    }

    handleChange({target}) {
        this.setState({
            [target.name]: target.value
        });
    }

    onSubmit() {
        this.props.handleData(this.state.mark);
    };

}

export default Rating;