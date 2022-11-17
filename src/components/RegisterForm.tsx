import {Component} from "react";
import {Formik, Field, Form, ErrorMessage} from "formik";
import {useNavigate} from "react-router-dom";
import * as Yup from "yup";
import AuthService from "../services/AuthService";
import {SubmitButton} from "./SubmitButton";

type Props = {}

type State = {
    name: string,
    email: string,
    password: string,
    loading: boolean,
    message: any,
    error: boolean
};

export class RegisterForm extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            name: "",
            email: "",
            password: "",
            loading: false,
            message: "",
            error: true
        }
    }

    handleSubmit(formValue: { name: string; email: string; password: string }) {
        const {name, email, password} = formValue;
        this.setState({
            message: "",
            loading: true,
            error: true
        })

        AuthService.register(name, email, password).then(
            success => {
                this.setState({
                    loading: false
                });
                if (success.name && success.email) {
                    this.setState({
                        message: 'Register success!!!',
                        error: false
                    });
                } else if (Array.isArray(success.error)) {
                    let messages = "";
                    success.error.forEach(function (value: string) {
                        messages += `<span>${value}</span>`
                    })
                    this.setState({
                        message: messages
                    });
                } else {
                    this.setState({
                        message: success.error
                    });
                }
            },
            error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                this.setState({
                    loading: false,
                    message: resMessage
                });
            }
        )
    }

    signupSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, "Field is too Short! Minimum: 3 characters")
            .max(50, "Field is too Long! Maximum: 50 characters")
            .required("Field is required"),
        password: Yup.string()
            .min(6, "Field is too Short! Minimum: 3 characters")
            .required("Field is required"),
        email: Yup.string()
            .email("Invalid email")
            .required("Field is required"),
    });

    render() {
        const {loading, message} = this.state;
        console.log(loading)
        const initialValues = {
            name: "",
            email: "",
            password: "",
        };
        return (
            <div className="flex justify-center align-center max-w-sm">
                <Formik initialValues={initialValues} onSubmit={this.handleSubmit}
                        validationSchema={this.signupSchema}
                >
                    {({errors, touched}) => (
                        <Form className="w-80 sm:w-96 p-2 sm:p-0 max-w-xl">
                            <div className="mb-3.5">
                                <Field type="text"
                                       name="name"
                                       className="input border-none rounded-none w-full h-[46px]"
                                       placeholder="Name"/>
                                {touched.name && errors.name &&
                                    <div className="alert alert-error shadow-lg my-3.5">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                 className="stroke-current flex-shrink-0 h-6 w-6" fill="none"
                                                 viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      stroke-width="2"
                                                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                            </svg>
                                            <span>{errors.name}.</span>
                                        </div>
                                    </div>
                                }
                            </div>
                            <div className="mb-3.5">
                                <Field type="email"
                                       name="email"
                                       className="input input-bordered w-full border-none rounded-none h-[46px]"
                                       placeholder="Email"/>
                                {touched.email && errors.email &&
                                    <div className="alert alert-error shadow-lg my-3.5">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                 className="stroke-current flex-shrink-0 h-6 w-6" fill="none"
                                                 viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      stroke-width="2"
                                                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                            </svg>
                                            <span>{errors.email}.</span>
                                        </div>
                                    </div>
                                }
                            </div>
                            <div className="mb-6">
                                <Field type="password"
                                       name="password"
                                       className="input input-bordered w-full border-none rounded-none h-[46px]"
                                       placeholder="Password"/>
                                {touched.password && errors.password &&
                                    <div className="alert alert-error shadow-lg my-3.5">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                 className="stroke-current flex-shrink-0 h-6 w-6" fill="none"
                                                 viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      stroke-width="2"
                                                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                            </svg>
                                            <span>{errors.password}.</span>
                                        </div>
                                    </div>
                                }
                            </div>
                            {this.state.message && this.state.error &&
                                (
                                    < div className="alert alert-error shadow-lg mb-6">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             className="stroke-current flex-shrink-0 h-6 w-6" fill="none"
                                             viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                        </svg>
                                        <div className="inline w-full"
                                             dangerouslySetInnerHTML={{__html: message}}>
                                        </div>
                                    </div>
                                )
                            }
                            {this.state.message && !this.state.error &&
                                (
                                    <div className="alert alert-success shadow-lg mb-6">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                 className="stroke-current flex-shrink-0 h-6 w-6" fill="none"
                                                 viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                            </svg>
                                            <div className="inline w-full"
                                                 dangerouslySetInnerHTML={{__html: message}}>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            <SubmitButton loading={loading}>Create account</SubmitButton>
                        </Form>
                    )}
                </Formik>
            </div>
        )
    }
}