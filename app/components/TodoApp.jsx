/***********************
 * Module dependencies *
 ***********************/
import React from 'react';
import uuid from 'node-uuid';
import moment from 'moment';
// var React = require('react');
// var uuid = require('node-uuid');
// var moment = require('moment');

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

var TodoApp = React.createClass({
  render: function(){
    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch />
              <TodoList />
              <AddTodo />
          </div>
          </div>
        </div>
      </div>
    );
  }
});


/******************
 * Export TodoApp   *
 ******************/
module.exports = TodoApp;
