/**
 * Augment the typings of Vue.js
 */

import Vue from 'vue';
import {GetGeolocationPosition, WatchGeolocationPosition} from "./index";

declare module 'vue/types/vue' {
    interface Vue {
        $getLocation: (options?: PositionOptions, forceReject?: boolean) => Promise<GetGeolocationPosition>;
        $watchLocation: (options?: PositionOptions, forceReject?: boolean) => Promise<WatchGeolocationPosition>;
        $clearLocationWatch: (watchID) => Promise<void>;
    }
}
