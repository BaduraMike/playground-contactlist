import React, {Component} from 'react';
import Avatar from "./Avatar";
import Counter from "./Counter";
import Rating from "./experience/Rating"
import RatingPublisher from "./experience/RatingPublisher";

class ContactItem extends Component {
    constructor(props) {
    super(props);
        this.state = {
        mark: 0
        }
    }

    render() {
        const {login, name, department} = this.props;
        return (
            <div className={"ui internally celled grid"}>
                <div className={"three wide column"}>
                    <li className={"item"}>
                        <Avatar login={login}/>
                        <div className={"content"}>
                            <h4 className={"header"}>{name}</h4>
                            <div className={"description"}>
                                {department}
                            </div>
                        </div>
                    </li>
                </div>
                <Counter/>
                <Rating handleData={this.handleParentData}/>
                <RatingPublisher mark={this.state.mark}/>
            </div>
        );
    }

    handleParentData = (e) => {
        this.setState({mark: e})
    };

}

export default ContactItem;