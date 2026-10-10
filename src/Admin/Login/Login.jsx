import { useForm } from "react-hook-form";
import "./Login.css";
// import { login } from "../../services/auth.service";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { login } from "../../services/auth.service";

function Login() {

    const navigate = useNavigate();

    useEffect(() => {

        const token = localStorage.getItem("token");

        if (token) {
            navigate("/admin/dashboard");
        }

    }, [navigate]);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data) => {

        console.log('data')

        try {

            const response = await login(data);

            localStorage.setItem(
                "token",
                response.accessToken
            );

            toast.success(response.message);

            navigate("/admin/dashboard");

            console.log(response);

        } catch (error) {

            toast.error(
                error.response?.data?.message || "Login failed."
            );

        }

    };

    return (
        <div className="login-page">
            <div className="login-container">

                <div className="login-card">

                    <div className="login-brand">
                        <div className="brand-icon">M</div>
                        <div>
                            <h1>Restaurant Admin</h1>
                            <p>Sign in to continue</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="input-group">

                            <label>Email</label>

                            <input
                                type="email"
                                placeholder="Enter your email"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^\S+@\S+\.\S+$/,
                                        message: "Please enter a valid email"
                                    }
                                })}
                            />

                            {errors.email && (
                                <p className="error">
                                    {errors.email.message}
                                </p>
                            )}


                        </div>

                        <div className="input-group">

                            <label>Password</label>

                            <input
                                type="password"
                                placeholder="Enter your password"
                                {...register("password", {
                                    required: "Password is required"
                                })}
                            />

                            {errors.password && (
                                <p className="error">
                                    {errors.password.message}
                                </p>
                            )}

                        </div>

                        <button type="submit">

                            Login

                        </button>

                    </form>

                </div>

            </div>
        </div>
    );
}

export default Login;