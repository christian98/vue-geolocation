import { PluginObject } from 'vue';

export interface WatchGeolocationPosition {
    readonly lat: number;
    readonly lng: number;
    readonly altitude: number | null;
    readonly altitudeAccuracy: number | null;
    readonly accuracy: number;
    readonly heading: number | null;
    readonly speed: number | null;
}

export interface GetGeolocationPosition {
    readonly lat: number;
    readonly lng: number;
    readonly altitude: number | null;
    readonly altitudeAccuracy: number | null;
    readonly accuracy: number;
}

export const VueGeolocation: PluginObject<any>;