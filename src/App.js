import React, {Fragment, useState, useEffect} from 'react';
import Header from "./components/Header";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Error from "./components/Error";

function App() {
    const title = "Weather React App"

    const [search, setSearch] = useState({
        country: "",
        city: ""
    });
    const [result, setResult] = useState({});
    const [request, setRequest] = useState(false);
    const [error, setError] = useState(false);

    const {country, city} = search;

    useEffect(() => {
        const getWeather = async () => {
            if (request) {
                const apiKey = "bf860511550d5d2603b1736ea3910567";
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`;

                const response = await fetch(url);
                const result = await response.json();
                setResult(result)
                setRequest(false);
            }

            if (result.cod === "404") {
                setError(true);
            } else {
                setError(false);
            }
        }
        getWeather();
        // eslint-disable-next-line
    }, [request])

    let component;
    if (error) {
        component = <Error message="There are no results" />
    } else {
        component = <Weather
            result={result}
        />
    }

    return (
        <Fragment>
            <Header
                title={title}
            />
            <div className="container-form">
                <div className="container">
                    <div className="row">
                        <div className="col m6 s12">
                            <Form
                                search={search}
                                setSearch={setSearch}
                                setRequest={setRequest}
                            />
                        </div>
                        <div className="col m6 s12">
                            {component}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default App;
