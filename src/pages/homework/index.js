import React from "react";
import {List} from "./List";
import {Timer} from "./Timer";
import {ButtonReduxContainer} from "./ButtonRedux";
import {PostsContainer} from "./Posts";

export const HomeworkPage = () => {
    return (
        <>
            <List.UsersList />
            <Timer />
            <ButtonReduxContainer />
            <PostsContainer />
        </>
    )
}