import React from "react";
import {users} from "../Containers/Users";

export const List = {
    User: (props) => {
        return <li>firstName: {props.user.firstName},
            lastName: {props.user.lastName},
            fullName: {props.user.firstName} {props.user.lastName},
            age: {props.user.age + 5},
            job: {props.user.job}</li>;
    },
    UsersList: () => {
        return (
            <ol>
                {users.map((user) => <List.User key={user.id} user={user} />)}
            </ol>
        )
    }
}