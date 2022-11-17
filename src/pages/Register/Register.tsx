import {Component} from "react";
import {RegisterForm} from "../../components/RegisterForm";

type Props = {};
type State = {};

export class Register extends Component<Props, State> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="mt-10">
                <div className="flex flex-col h-full w-full justify-center items-center">
                    <p className="text-white font-semibold text-2xl">Welcome to the MyAdesso Journey!</p>
                    <p className="text-white font-bold text-[17px]">Please create an account</p>
                    <div className="mt-10">
                        <RegisterForm></RegisterForm>
                    </div>
                </div>
            </div>
        );
    }
}