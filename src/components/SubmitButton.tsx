import {Component} from "react";

type Props = {
    loading: boolean,
    children: any
}

type States = {}

export class SubmitButton extends Component<Props, States> {
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <button
                className="inline-flex items-center btn btn-block bg-color-primary border-none rounded-full h-[53px] text-white hover:text-color-primary active:text-color-primary hover:bg-white hover:text-color-primary active:bg-white active:text-color-primary"
                type="submit" disabled={this.props.loading}>
                {this.props.loading && (
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg"
                         fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                stroke-width="4"></circle>
                        <path className="opacity-75" fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                )}
                {this.props.children}</button>
        );
    }
}
