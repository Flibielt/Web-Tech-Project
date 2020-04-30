import React, {Fragment} from 'react';

import {Card} from 'react-bootstrap';

const profile = (props) => {
    return (
        <Fragment>
            <Card.Title>{props.fisherman.firstName} {props.fisherman.lastName}</Card.Title>
            <Card.Text>
                <b>Equipment: </b>{props.fisherman.equipment}
            </Card.Text>
            <Card.Text>
                <b>Baits: </b>{props.fisherman.bait}
            </Card.Text>
            <Card.Text>
                <b>Techniques: </b>{props.fisherman.techniques}
            </Card.Text>
            <Card.Text>
                <b>Poles: </b>{props.fisherman.fishingPoles}
            </Card.Text>
        </Fragment>
    );
};

export default profile;
