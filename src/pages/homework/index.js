import React from "react";
import {List} from "./List";
import {Timer} from "./Timer";
import {ButtonReduxContainer} from "./ButtonRedux";

export const HomeworkPage = () => {
    return (
        <>
            <List.UsersList />
            <Timer />
            <ButtonReduxContainer />
        </>
    )
}