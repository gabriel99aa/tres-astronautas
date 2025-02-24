import { CelestialBody } from '@interfaces';
import { create } from 'zustand';
import { persist, PersistStorage, StorageValue } from 'zustand/middleware';

interface GeneralState {
    planets: CelestialBody[] | null;
    setPlanets: (data: CelestialBody[]) => void;
}

// Definimos el tipo del estado que realmente se guardará en sessionStorage
type PersistedState = Pick<GeneralState, 'planets'>;

// Implementación de sessionStorage compatible con Zustand
const sessionStoragePersist: PersistStorage<PersistedState> = {
    getItem: (key) => {
        const value = sessionStorage.getItem(key);
        return value ? (JSON.parse(value) as StorageValue<PersistedState>) : null;
    },
    setItem: (key, value) => {
        sessionStorage.setItem(key, JSON.stringify(value));
    },
    removeItem: (key) => {
        sessionStorage.removeItem(key);
    }
};

export const useGeneralStore = create<GeneralState>()(
    persist(
        (set) => ({
            planets: null,
            setPlanets: (planets: CelestialBody[]) => set({ planets }),
            reset: () => set({ planets: null })
        }),
        {
            name: 'general-storage',
            storage: sessionStoragePersist,
            partialize: (state) => ({ planets: state.planets })
        }
    )
);

export default useGeneralStore;
