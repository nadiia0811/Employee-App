import React from 'react';
import './employees-add-form.scss';


class EmployeesAddForm extends React.Component {
    constructor(props){
    super(props);

    this.state = {
        name: '',
        salary: ''
    }
}

onValueChange = (e) => {  // when user add some value to input field
  this.setState({
    [e.target.name]: e.target.value,
    
  })
}



onSubmit = (e) => {
  e.preventDefault();
  if(!this.state.name) return; 
  if(typeof(this.state.name) !== 'string') return;
  
  this.props.onAdd(this.state.name, this.state.salary); 
  this.setState({
      name: '',
      salary: ''
  })
}

render(){
    const {name, salary} = this.state;

    return (
        <div className="app-add-form">
          <h3>Add new employee</h3>
          <form
             className="add-form d-flex"
             onSubmit = {this.onSubmit}>
            <input type="text"
                   className="form-control new-post-label"
                   placeholder="Employee name?" 
                   name = "name" // e.target.name = "name"
                   onChange = {this.onValueChange} 
                   value = {name}
            />
                
            <input type="number"
                   className="form-control new-post-label"
                   placeholder="Salary in $?" 
                   name = "salary"//  e.target.name = "salary"
                   onChange = {this.onValueChange}  
                   value = {salary}
             />
               

            <button type="submit"
                    className="btn btn-outline-light">Add employee</button>
          </form>
       </div>
    )
  }
}

export default EmployeesAddForm;