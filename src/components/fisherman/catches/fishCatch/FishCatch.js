import React from "react";

const fishCatch = (props) => (
    <tr>
        <td>{props.catch.location}</td>
        <td>{new Date(props.catch.timestamp).toUTCString()}</td>
        <td>{props.catch.species}</td>
        <td>{props.catch.weight}</td>
    </tr>
)

export default fishCatch;
