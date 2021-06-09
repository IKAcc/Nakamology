import debounce from 'lodash.debounce';
import mapValues from 'lodash.mapvalues';

const state = {
    device: {},
};

const mutations = {
    setDevice (state, device) {
        state.device = device;
    },
};

const actions = {
    checkDevice({ commit }) {
        if (window) {
            const device = {};
            const deviceWidths = {
                isSmallMobile: [0, 640],
                isMobile: [0, 768],
                isTablet: [769, 1024],
                isDesktop: [1024, Infinity],
                isLargeDesktop: [1280, Infinity],
            };
            const checkDevice = debounce(() => {
                const windowWidth = window.innerWidth;
                Object.assign(device, mapValues(deviceWidths, (value, key) => {
                    return windowWidth >= value[0] && windowWidth <= value[1];
                }));
                commit('setDevice', device);
            }, 300);
            window.addEventListener('resize', checkDevice);
            checkDevice();
        }
    },
};

export default {
    state,
    mutations,
    actions,
};
