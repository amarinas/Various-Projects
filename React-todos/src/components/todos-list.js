import _ from 'lodash';
import React from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';

export default class TodoList extends React.Component {
  renderItems() {
    const= ._omit(this.props, 'todos');

    return _.map(this.props,todos, (todo, index) => <TodoListItem key={index} {...todo} {...props} />);
  }

  render(){
    return(
      <table>
          <TodosListHeader />
          <tbody>
              {this.renderItems()}
          </tbody>
      </table>
    );
  }
}
