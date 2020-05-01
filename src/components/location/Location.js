import React from "react";

const location = (props) => {
    return (
        <tr>
            <td>{props.location.name}</td>
            <td>{props.location.owner}</td>
            <td>{props.location.lastMonthCatches}</td>
        </tr>
    )
}

export default location;
