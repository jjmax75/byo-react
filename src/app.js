const Hello = () => React.createElement('div', null, 'Hello World');

const helloWorld = React.createElement(Hello, null, null);
const hellowWorl2 = React.createElement(Hello, null, null);
const regularDiv = React.createElement('div', null, "I'm just a regular div");

const parent = React.createElement('div', null,
  helloWorld,
  hellowWorl2,
  regularDiv,
  "I'm just text"
);

ReactDOM.render(parent, document.querySelector('#root'));
