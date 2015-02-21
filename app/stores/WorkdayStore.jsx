var Reflux = require('reflux');
var _ = require('lodash');

module.exports = Reflux.createStore({
    workdays: [],

    currentActivities: [],
    currentUsers: [],

    getWorkdays: function(){
        return this.workdays;
    },

    getCurrentActivities: function(){
        return this.users;
    },

    getCurrentUsers: function(){
        return this.users;
    },

    setMetaProperties: function(){
        // Get activity IDs from workdays
        this.activities = _.uniq(this.workdays.map(function(workday){
            return workday.activity.id
        }));

        // Get user IDs from workdays
        this.users = _.uniq(this.workdays.map(function(workday){
            return workday.user.id
        }));
    },

    setCurrentActivities: function(){
        var activities = [];
    },

    fetchWorkdays: function(filterData){
        $.ajax({
            url: "http://ceras.se/report/workdays.json?&max=-1",
            crossDomain: true,
            data: filterData
        }).then(function(data){
            this.workdays = data;
            this.setMetaProperties();
            this.trigger(this.workdays);
        }.bind(this));
    }
});