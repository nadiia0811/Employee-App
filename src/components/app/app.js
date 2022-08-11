import React from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';





class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      data: [
        {name: 'John C.', salary: 800, increase: false, id: 1},  //id - key to virtualDOM
        {name: 'Alex M.', salary: 3000, increase: true, id: 2},
        {name: 'Carl W.', salary: 1000, increase: false, id: 3}
      ]
    }
  }

  deleteItem = (id) => {
    this.setState(({data}) => { //чистый массив, не обьект
         //const index = data.findIndex(elem => elem.id === id);

         //const before = data.slice(0,index);
         //const after = data.slice(index + 1);
         //const newArr = [...before, ...after];

         const newArr = data.filter(item => item.id !== id);
         return {data: newArr}
         
    })
  }

  render(){
  

  return (
    <div className="app">
      <AppInfo />

    <div className="search-panel">
      <SearchPanel />
      <AppFilter />
    </div>

    <EmployeesList data = {this.state.data}
                   onDelete = {this.deleteItem} //обращ к методу к-та App
    />   
    <EmployeesAddForm />

    </div>

    );
  }
}


export default App;