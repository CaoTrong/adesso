import {Component} from "react";
import {LoginForm} from "../../components/LoginForm";
import {NavigateFunction} from "react-router-dom";

type Props = {
    navigate: NavigateFunction
};
type State = {};

export class Login extends Component<Props, State> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="mt-10">
                <div className="flex flex-col h-full w-full justify-center items-center">
                    <p className="text-white font-semibold text-2xl">Welcome to the MyAdesso Journey!</p>
                    <p className="text-white font-bold text-[17px]">Please login to your account</p>
                    <div className="mt-10">
                        <LoginForm navigate={this.props.navigate}></LoginForm>
                    </div>
                </div>
            </div>
        );
    }
}