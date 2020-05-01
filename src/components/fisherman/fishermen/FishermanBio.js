import React from "react";

const fishermanBio = (props) => {
    return (
        <tr>
            <td>{props.fisherman.id}</td>
            <td>{props.fisherman.firstName} {props.fisherman.lastName}</td>
            <td>{props.fisherman.phone}</td>
            <td>{props.fisherman.address.zipCode}</td>
            <td>{props.fisherman.address.houseNumber} {props.fisherman.address.street}, {props.fisherman.address.city}</td>
        </tr>
    )
}

export default fishermanBio;
