import React from "react";
import Card from "react-bootstrap/Card";


export interface DataCardProps {
    text: string;
    data: string;
}

export const DataCard = (props: DataCardProps) => {
    return(
        <Card className={'text-center'} style={{maxHeight: 120, maxWidth: 300, margin: 30, overflowY: 'hidden'}}>
            <Card.Body>
                <Card.Title>{props.text}</Card.Title>
                <Card.Text >
                    {props.data}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}