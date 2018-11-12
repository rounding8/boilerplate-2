
import $        from 'jquery';
import React    from 'react';
import ReactDOM from 'react-dom';

const App = {

    init: function() {
        console.log('=> App.init()');

        // Initialize Application here...
        App['data'] = {};

        $.get('/api/user', App.load, 'json');
    },

    load: function(user) {
        console.log('=> App.load()');

        App['user'] = user;

        console.log(user);

        App.exec(user);
    },

    exec: function(content) {
        console.log('=> App.exec()');

        ReactDOM.render(<h1>content</h1>, document.getElementById('root'));
    }
};

window.onload = () => {
    App.init();
};
