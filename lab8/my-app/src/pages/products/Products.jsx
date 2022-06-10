import React, {useState} from 'react';
import {Button, Row, Col} from "react-bootstrap";
import useWindowSize from "../../utils/useWindowSize";
import {getFromServer} from "../../utils/getFromServer";
import ProductCard from "../../components/card/ProdCard";

const Products = () => {

    const [products, setProducts] = useState([]);

    const loadProducts = async () => {
        const results = await getFromServer('http://127.0.0.1:8000/Product/');
        await setProducts(results);
        document.getElementById("loadButton").hidden = true;
    }

    const {width} = useWindowSize();
    const isMobile = width && width <= 600;

    return (
        <div>
            <div className="m-5" id="loadButton">
                <Button onClick={loadProducts}>Загрузить список продуктов</Button>
            </div>
            <div className="mb-5">
                <Row xs={1} md={isMobile ? 1 : 3} className="g-3">
                    {products.map((item, index) => {
                        return <Col>
                            <ProductCard {...item} key={index}/>
                        </Col>
                    })}
                </Row>
            </div>

        </div>
    );
};

export default Products;