import React from 'react';
import {Card} from 'react-bootstrap'
import {Link} from "react-router-dom";

const ProductCard = ({id, name}) => {

    return (
        <Card className="card" style={{'border': '2px solid black', 'padding': '10px', 'margin': '10px'}}>
            <Card.Body>
                <div className="textStyle">
                    <Card.Title>ID = {id}</Card.Title>
                </div>
                <div className="textStyle">
                    <Card.Text>Название: {name}</Card.Text>
                </div>
                <Link to={'/product/' + id.toString()}>Подробнее</Link>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;