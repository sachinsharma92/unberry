import mixpanel from 'mixpanel-browser';
mixpanel.init('a84d5b5d2c9901eff738bc0a5ff7ed09', {ignore_dnt: true});

export let Mixpanel = {
  track: (name, props) => {
    mixpanel.track(name, props);
  },
};
