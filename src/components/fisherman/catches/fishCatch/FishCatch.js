import React from "react";

const fishCatch = (props) => (
    <tr>
        <td>{props.catch.timestamp}</td>
        <td>{props.catch.location}</td>
        <td>{props.catch.weight}</td>
        <td>{props.catch.species}</td>
    </tr>
)

export default fishCatch;
