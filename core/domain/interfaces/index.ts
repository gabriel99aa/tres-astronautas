export interface Props {
    params: { name: string };
}

interface Moon {
    moon: string;
    rel: string;
}

interface Mass {
    massValue: number;
    massExponent: number;
}

interface Volume {
    volValue: number;
    volExponent: number;
}

export interface CelestialBody {
    id: string;
    name: string;
    englishName: string;
    isPlanet: boolean;
    moons?: Moon[] | null;
    inclination: number;
    mass: Mass;
    vol: Volume;
    density: number;
    gravity: number;
    meanRadius: number;
    equaRadius: number;
    polarRadius: number;
    sideralOrbit: number;
    sideralRotation: number;
    discoveredBy: string;
    discoveryDate: string;
    axialTilt: number;
    avgTemp: number;
    bodyType: string;
    rel: string;
}

export interface Planet {
    name: string;
    link: string;
}
