import {Component} from "react";
import logoPath from '../assets/images/logo.png';
import {Navigate} from "react-router-dom";

type Props = {
    className: string
}

type States = {
    redirect: boolean
}

export class Logo extends Component<Props, any> {
    constructor(props: Props) {
        super(props);
        this.state = {
            redirect: false
        }
        this.handleClick = this.handleClick.bind(this)

    }

    handleClick() {
        this.setState({redirect: true})
    }

    render() {
        let {redirect} = this.state
        if (redirect) {
            this.setState({redirect: false})
            return (
                <Navigate to="/" replace={true}/>
            );
        } else {
            return (
                <img src={logoPath} className={this.props.className} alt="Logo" onClick={this.handleClick}/>
            );
        }
    }
}