import React, {Component} from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {counter: 0};
    }

    render() {

        return (
            <div className={"ui buttons"}>
                <button className={"ui animated button"} onClick={this.increment.bind(this)}>
                    <div className={"visible content"}>Like</div>
                    <div className={"hidden content"}>
                        <i className={"plus icon"}/>
                    </div>
                </button>
                <div className={"or"}/>
                <button className={"ui animated button"} onClick={this.decrement.bind(this)}>
                    <div className={"visible content"}>Dislike</div>
                    <div className={"hidden content"}>
                        <i className={"minus icon"}/>
                    </div>
                </button>
                <div className={"ui label"}>{this.state.counter}</div>
            </div>
        );
    }

    increment() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    decrement() {
        this.setState({
            counter: this.state.counter - 1
        })
    }
}

export default Counter;