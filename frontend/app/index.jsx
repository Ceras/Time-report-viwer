'use strict';
var React = require('react');
var Reflux = require('reflux');
var LoginStore = require('../app/stores/LoginStore');

require('../app/index.scss');

var ActivityStore = require('../app/stores/ActivityStore');
var UserStore = require('../app/stores/UserStore');
var WorkdayStore = require('../app/stores/WorkdayStore');
var FilterStore = require('./filter/FilterStore');

var Filter = require('../app/filter/Filter.jsx');
var WorkdayViewer = require('../app/workdayViewer/workdayViewer');

var App = React.createClass({
    getInitialState: function () {
        return {
            loggedIn: false
        }
    },
    setLoggedIn: function(){ // this is to trigger re rendering when logged in
        var loggedIn = LoginStore.isAuthorized();

        if(this.loggedIn !== loggedIn){
            this.setState({
                loggedIn: loggedIn
            });
        }
    },
    componentWillMount: function(){
        var filterProperties = [
            {
                label: 'From',
                serverProperty: 'from',
                type: 'date'
            }, {
                label: 'To',
                serverProperty: 'to',
                type: 'date'
            }, {
                label: 'Activities',
                type: 'select',
                serverProperty: 'activities',
                multiple: true,
                dataStore: ActivityStore
            }, {
                label: 'Users',
                type: 'select',
                serverProperty: 'users',
                multiple: true,
                dataStore: UserStore
            }
        ];

        FilterStore.setFilterConfiguration(filterProperties);
        FilterStore.listen(WorkdayStore.fetchWorkdays);
        LoginStore.listen(this.setLoggedIn);
    },

    render : function(){
        if(!LoginStore.isAuthorized()){
            console.log('not logged in');
            LoginStore.login('username', 'password');
        } else {
            console.log('logged in');
            return (
                <div id="pageContainer">
                    <Filter/>
                    <WorkdayViewer/>
                </div>
            )
        }
        return (<div></div>);

    }
});

React.render(<App/>, document.body);