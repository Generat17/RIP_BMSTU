import React, {useState} from 'react';
import useWindowSize from "../../utils/useWindowSize";
import {Button, Col, Row} from "react-bootstrap";
import {getFromServer} from "../../utils/getFromServer";
import CompanyCard from "../../components/card/CompCard";

const Companys = () => {

    const [companys, setCompanys] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const loadCompanys = async () => {
        const results = await getFromServer('http://127.0.0.1:8000/Company/');
        await setCompanys(results);
        await setIsLoaded(true);
        document.getElementById("loadButton").hidden = true;
    }

    const {width} = useWindowSize();
    const isMobile = width && width <= 600;

    return (
        <div className="d-flex flex-column container justify-content-center">
            <div className="m-5" id="loadButton">
                <Button onClick={loadCompanys}>Загрузить список компаний</Button>
            </div>
            <div className="mb-5">
                <Row xs={1} md={isMobile ? 1 : 3} className="g-3">
                    {isLoaded ? companys.map((item, index) => {
                        return <Col>
                            <CompanyCard {...item} key={index}/>
                        </Col>
                    }) : ''}
                </Row>
            </div>
        </div>
    );
};

export default Companys;