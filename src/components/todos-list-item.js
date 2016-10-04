import React from 'react';

export default class TodosListItem extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            isEditing: false
        }
    }

    renderActionsSection(){
        if(this.state.isEditing){
            return (
                <td>
                    <button>Save</button>
                    <button onClick={ this.OnCancelClick.bind(this) }>Cancel</button>
                </td>
            );
        }

        return(
            <td>
                <button onClick={ this.onEditClick.bind(this) } >Edit</button>
                <button>Delete</button>
            </td>
        );
    }

    render(){

        console.log(this.props);

        return (

            <tr>
               <td>{ this.props.task } </td>
                { this.renderActionsSection() }
            </tr>
        )
    }



    onEditClick(){
        this.setState({ isEditing: true });
    }
    OnCancelClick(){
        this.setState({
            isEditing: false 
        })
    }
}