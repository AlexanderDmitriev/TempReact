export const CountryList = ({countries}) => {
    return (
        <ul>
            {countries.map(country => <li>{country}</li>)}
        </ul>
    )
};