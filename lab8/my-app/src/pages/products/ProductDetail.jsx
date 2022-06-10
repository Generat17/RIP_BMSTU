import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {getFromServer} from "../../utils/getFromServer";

const ProductDetail = () => {
    const id = useParams().id;

    const [product, setProduct] = useState();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getFromServer('http://127.0.0.1:8000/Product/' + id.toString()).then((data) => {
            setProduct(data);
            setIsLoaded(true);
        }); // eslint-disable-next-line
    }, []);

    return (
        <div>
            <table style={{'border': '2px solid black'}}>
                <tr>
                    <td>ID продукта:</td>
                    <td>{id}</td>
                </tr>
                <tr>
                    <td>Название:</td>
                    <td>{isLoaded ? product.name : 'загружается...'}</td>
                </tr>
                <tr>
                    <td>Цена:</td>
                    <td>{isLoaded ? product.price : 'загружается...'}</td>
                </tr>
            </table>
        </div>
    );
};

export default ProductDetail;