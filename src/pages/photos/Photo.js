import React from "react";
import {useNavigate} from "react-router-dom";

export const Photo = () => {
    const navigate = useNavigate();
    return (
        <>
            <h1>Photo</h1>
            <button onClick={() => {
                navigate('/')
            }}>Click</button>
        </>
    );
};