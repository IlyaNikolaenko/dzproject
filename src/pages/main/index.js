import React from "react";
import {MyComponents} from "./MyComponents";
import logo from "../../logo.svg";
import {Link} from "react-router-dom";

export const MainPage = () => {
    const getData = () => {
        return "Some data";
    };

    return (
        <>
            <Link to={"/photos"}>Go to Photos</Link>
            <Link to={"/counter"}>Go to Counter</Link>
            <Link to={"/lifecycle"}>Go to Lifecycle</Link>
            <Link to={"/homework"}>Go to Homework</Link>
            <Link to={"/forms"}>Go to Forms</Link>
            <MyComponents.Header logo={logo}/>
            <MyComponents.Body />
            <MyComponents.Section
                text="Some text"
                isDefault
                count={2 * 5}
                user={{ name: "John", age: 34 }}
                data={getData()}
            />
        </>
    )
}