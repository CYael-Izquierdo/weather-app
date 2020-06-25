import React, {useState} from "react";
import PropTypes from "prop-types";
import Error from "./Error";

const Form = ({search, setSearch, setRequest}) => {

    const [error, setError] = useState(false);

    const {country, city} = search;

    // Update state (search)
    const handleChange = e => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        // Validation
        if (country.trim() === "" || city.trim() === "") {
            setError(true);
            return;
        }
        setError(false);

        setRequest(true);
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            {error ?
                <Error
                message="All fields are required"
                /> : null
            }
            <div className="input-field col s12">
                <select
                   name="country"
                   id="country"
                   value={country}
                   onChange={handleChange}
                >
                    <option value="">-- Select your country --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="country">Country</label>
            </div>
            <div className="input-field col s12">
                <input
                    type="text"
                    name="city"
                    id="city"
                    value={city}
                    onChange={handleChange}
                />
                <label htmlFor="city">City</label>
            </div>
            <div className="input-field col s12">
                <input
                    type="submit"
                    value="Search Weather"
                    className="waves-effect wave-light btn-large btn-block yellow accent-4"
                />
            </div>
        </form>
    );
}

Form.propTypes = {
    search: PropTypes.object.isRequired,
    setSearch: PropTypes.func.isRequired,
    setRequest: PropTypes.func.isRequired
};


export default Form;