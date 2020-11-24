import React from 'react';
import { useQuery, gql } from '@apollo/client';

const getTankByCountry = gql`
        query getTankByCountry ($countryName: String) {
            getTanksByCountry(countryName: $countryName) {
                countryName
                tanks {
                    name
                }
            }
        }
    `


const Tank = ({ blur, countryName, onClick }) => {


    const { loading, error, data } = useQuery(getTankByCountry, { 
        variables: { countryName: countryName } 
    });
    

    if(loading) return <p>Loading Data...</p>
    if(error) return <p>Error</p>

    console.log(countryName)

    return (
        <div className={ (blur === false ? 'country-list-collection' : 'country-list-collection country-list-collection-blur') }>
            <h1>{ data.getTanksByCountry.countryName }</h1>
            { data.getTanksByCountry.tanks.map(tank => (
                <p key={ tank.name } >{ tank.name }</p>
            )) }
            <span onClick={ () => onClick()  } className="closeBtn">X</span>
        </div>
    )
} 

export default Tank;