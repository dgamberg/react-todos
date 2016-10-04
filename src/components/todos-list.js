import _ from 'lodash';
import React from 'react';
import ToDosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';

export default class TodosList extends React.Component{
    
    renderItems(){
        return _.map( this.props.todos, (todo, index) =>
            <TodosListItem key={index} {...todo} />);

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