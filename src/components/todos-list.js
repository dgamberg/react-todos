import _ from 'lodash';
import React from 'react';
import ToDosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';

export default class TodosList extends React.Component{
    
    renderItems(){

        // leave out props we dont want to include, omit totos so not repeated
        const props = _.omit(this.props, 'todos');
        
        return _.map( this.props.todos, ( todo, index) =>
            <TodosListItem key={index} {...todo}  {...props} />);

    }
    
    render(){

        console.log(this.props);

        return (

           <table>
               <ToDosListHeader/>
               <tbody>

                   { this.renderItems() }

               </tbody>
           </table>
        )
    }
}