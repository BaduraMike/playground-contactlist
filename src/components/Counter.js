import React, {Component} from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sumCounter: 0,
            totalCounter: 0,
            doubleClickCounter: 0
        };
    }

    render() {

        return (
            <div className={"middle aligned columns"}>
                <p><br/>
                    <div className={"ui buttons"}>
                        <button className={"ui animated button"}
                                onClick={this.clickIncrement.bind(this)}
                                onDoubleClick={this.doubleClickIncrement.bind(this)}>
                            <div className={"visible content"}>Like</div>
                            <div className={"hidden content"}>
                                <i className={"plus icon"}/>
                            </div>
                        </button>
                        <div className={"or"}/>
                        <button className={"ui animated button"}
                                onClick={this.clickDecrement.bind(this)}
                                onDoubleClick={this.doubleClickDecrement.bind(this)}>
                            <div className={"visible content"}>Dislike</div>
                            <div className={"hidden content"}>
                                <i className={"minus icon"}/>
                            </div>
                        </button>
                    </div>
                </p>
                <div className={"ui label"}>
                    <p>Current social status: {this.state.sumCounter}</p>
                </div>
                <div className={"ui label"}>
                    <p>All reactions: {this.state.totalCounter}</p>
                </div>
                <div className={"ui label"}>
                    <p>Nervous reactions: {this.state.doubleClickCounter}</p>
                </div>
            </div>
        );
    }

    clickIncrement() {
        this.setState({
            sumCounter: this.state.sumCounter + 1,
            totalCounter: this.state.totalCounter + 1,
        }, () => {
        });
    }

    clickDecrement() {
        this.setState({
            sumCounter: this.state.sumCounter - 1,
            totalCounter: this.state.totalCounter + 1,
        }, () => {
        });
    }

    doubleClickIncrement() {
        this.setState({
            doubleClickCounter: this.state.doubleClickCounter + 1,
        }, () => {
        });
    }

    doubleClickDecrement() {
        this.setState({
            doubleClickCounter: this.state.doubleClickCounter + 1,
        }, () => {
        });
    }
}

export default Counter;