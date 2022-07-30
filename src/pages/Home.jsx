import React, {useState} from 'react'
import useCountries from "../hooks/useCountries";
import SkeletonCard from "../components/SkeletonCard";

const Home = () => {
    const [searchParam, setSearchParam] = useState()
    const {countries} = useCountries({filter: searchParam})
    const handleChange = (event) => {
        setSearchParam(event.target.value);
    }
    return (
        <div className={'w-full lg:w-1/2 p-4 mx-auto'}>
            <p className="font-semibold text-2xl mb-2">Country Search</p>
            <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2 text-gray-600" fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
                <input type="text" name="name" placeholder="name"
                       onChange={handleChange}
                       className="w-full py-2 border-b-2 border-gray-400 outline-none focus:border-blue-700"/>
            </div>
            <div className={"flex flex-col"}>
                {countries.length <= 0 ? <SkeletonCard/> :
                    <>
                        {countries.map((country, idx) => (
                            <div
                                key={idx}
                                className="relative p-4 w-full bg-white rounded-lg overflow-hidden shadow hover:shadow-md rounded-lg my-4">
                                <div className="flex flex-row justify-between">
                                    <div className="text-lg">
                                        <div className="text-blue-600 font-semibold mb-1">{country.name.common}</div>
                                        <div>{country.capital && country.capital[0]} , <span
                                            className="text-gray-400">{country.continents && country.continents[0]}</span>
                                        </div>
                                    </div>
                                    <div className="py-2 text-center text-sm text-gray-400 ">
                                        population
                                        <div className="text-black font-semibold text-xl">{country.population}</div>
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                    < />
                }
            </div>
        </div>
    )
}

export default Home
