import React, {Component} from 'react';
import RatingModifier from "./RatingModifier";

class Rating extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.clickIncrement = this.clickIncrement.bind(this);

        this.state = {
            mark: 0
        };
    }

    render() {
        return (
            <div>
                <RatingModifier buttonAction = {this.clickIncrement} />
                <div className="ui form">
                        <label>Type suggested rating: </label>
                    <div className={"ui icon input"}>
                    <input type={"number"}
                           name={"mark"}
                           value={this.state.mark}
                           onChange={this.handleChange}
                    />
                    <i className={"inverted circular check link icon"}
                       onClick={this.onSubmit}/>
                    </div>
                </div>
            </div>
        );
    }

    handleChange({target}) {
        this.setState({
            [target.name]: parseInt(target.value)
        });
    }

    onSubmit() {
        this.props.handleData(this.state.mark);
    };

    clickIncrement() {
        this.setState({
            mark: this.state.mark + 1
        }, () => {
        });
    }
}

export default Rating;