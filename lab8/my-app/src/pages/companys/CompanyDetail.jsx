import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {getFromServer} from "../../utils/getFromServer";

const CompanyDetail = () => {
    const id = useParams().id;

    const [company, setCompany] = useState();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getFromServer('http://127.0.0.1:8000/Company/' + id.toString()).then((data) => {
            setCompany(data);
            setIsLoaded(true);
        }); // eslint-disable-next-line
    }, []);

    return (
        <div className="d-flex justify-content-center m-5">
            <table style={{'border': '2px solid black'}}>
                <tr>
                    <td>ID компании:</td>
                    <td>{id}</td>
                </tr>
                <tr>
                    <td style={{'padding':'10px'}}>Название компании:</td>
                    <td>{isLoaded ? company.name : 'загружается...'}</td>
                </tr>
            </table>
        </div>
    );
};

export default CompanyDetail;