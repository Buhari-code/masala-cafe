import { useEffect } from "react";
import "./loader.css";

import loaderimg from '../../assets/loader001.png'

export default function Loader({ onFinish }) {

    useEffect(() => {

        const timer = setTimeout(() => {

            onFinish();

        }, 5000);

        return () => clearTimeout(timer);

    }, [onFinish]);

    return (

        <div className="loader">

            <div className="glow"></div>

            <div className="particles">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <img
                src={loaderimg}
                className="l-logo"
                alt="Masala Cafe"
            />

            <div className="steam steam1"></div>
            <div className="steam steam2"></div>
            <div className="steam steam3"></div>

            <h2 className="title">

                AUTHENTIC CHETTINAD TASTE

            </h2>

            <p className="since">

                Since 1998

            </p>

        </div>

    );

}