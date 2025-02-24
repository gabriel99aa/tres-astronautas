import { CelestialBody } from '@interfaces';

//! exclude API
//     semimajorAxis,
//     perihelion,
//     aphelion,
//     eccentricity,
//     escape,
//     flattening,
//     dimension,
//     aroundPlanet,
//     alternativeName,
//     mainAnomaly,
//     argPeriapsis,
//     longAscNode;

//! filter API
//     isPlanet,eq,true

const planets =
    'https://api.le-systeme-solaire.net/rest.php/bodies?exclude=semimajorAxis%2Cperihelion%2Caphelion%2Ceccentricity%2Cescape%2Cflattening%2Cdimension%2CaroundPlanet%2CalternativeName%2CmainAnomaly%2CargPeriapsis%2ClongAscNode&filter%5B%5D=isPlanet%2Ceq%2Ctrue';

export async function getCelestialBody() {
    try {
        const response = await fetch(planets, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error al consultar`);
        }

        const result = await response.json();

        const data = result?.bodies?.map((planet: CelestialBody) => ({
            ...planet,
            moons: planet?.moons ? planet?.moons.length : 0
        }));

        console.log('Datos obtenidos:', data);
        return data;
    } catch (error) {
        console.error('Error en getCelestialBody:', error);
        throw error;
    }
}
