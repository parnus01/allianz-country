import {useEffect, useState} from "react";

const useCountries = (options = {}) => {
    const [originData, setOriginData] = useState([])
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => {
                setOriginData(data)
                setCountries(data)
            });
    }, [])

    useEffect(() => {
        const keyword = options.filter?.toLowerCase()
        if (keyword) {
            const filterList = originData.filter((country) => {
                return country.name.common.toLowerCase().startsWith(keyword)
            });
            setCountries(filterList)
        } else if (keyword === '') {
            setCountries(originData)
        }
    }, [options.filter])

    return {countries}
}

export default useCountries
