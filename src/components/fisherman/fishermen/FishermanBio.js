import React from "react";

const fishermanBio = (props) => {
    return (
        <tr>
            <td>{props.fisherman.id}</td>
            <td>{props.fisherman.firstName} {props.fisherman.lastName}</td>
            <td>{props.fisherman.phone}</td>
            <td>{props.fisherman.zipCode}</td>
            <td>{props.fisherman.city}</td>
            <td>{props.fisherman.street} {props.fisherman.houseNumber}</td>
        </tr>
    )
}

export default fishermanBio;
