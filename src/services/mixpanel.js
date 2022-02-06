import mixpanel from 'mixpanel-browser';
mixpanel.init('8dc2647a85fb3d3d87fc43bfd38daf2f', {debug: true});
let actions = {
  track: (name, props) => {
    mixpanel.track(name, props);
  },
};

export let Mixpanel = actions;