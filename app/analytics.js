import ReactGA from 'react-ga';

ReactGA.initialize('UA-131775667-1',{
    debug: true,
});

ReactGA.pageview(window.location.pathname + window.location.search);

export default ReactGA;
