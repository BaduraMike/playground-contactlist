import React, {Component} from 'react';
import Avatar from "./Avatar";
import Counter from "./Counter";

class ContactItem extends Component {
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
                </div>
        );
    }
}

export default ContactItem;