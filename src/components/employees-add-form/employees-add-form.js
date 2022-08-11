import './employees-add-form.css';
import React from 'react';

class EmployeesAddForm extends React.Component {
    constructor(props){
    super(props);

    this.state = {
        name: '',
        salary: ''
    }
}

onValueChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value,
    
  })
}
render(){
    const {name, salary} = this.state;
    return (
        <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form
            className="add-form d-flex">
            <input type="text"
                className="form-control new-post-label"
                placeholder="Как его зовут?" 
                name = "name" //чтобы отличить инпуты ,e.target.name = "name"
                onChange = {this.onValueChange} 
                value = {name}
                />
                
            <input type="number"
                className="form-control new-post-label"
                placeholder="З/П в $?" 
                name = "salary"//чтобы отличить инпуты, e.target.name = "salary"
                onChange = {this.onValueChange}  
                value = {salary}
                />
               

            <button type="submit"
                    className="btn btn-outline-light">Добавить</button>
        </form>
    </div>
    )
  }
}

export default EmployeesAddForm;