import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';


const EmployeesList = ({data, onDelete}) => { //data = [{name: '', salary: , increase: , id:}, { }, { }]

  const elements = data.map(item => { 
    //item = {name: '', salary: , increase, id: } every time new object = item

    const {id, ...itemProps} = item; //частичная деструктуризация, из id вытаск id, name, salary, increase идут в ...itemProps
    return (
      //<EmployeesListItem name = {item.name} salary = {item.salary} increase = {item.increase}/> the same as

      <EmployeesListItem key = {id} 
                         {...itemProps} 
                         onDelete = {() =>onDelete(id)} //create next property 
                         />
    )
  });
  return (
    <ul className="app-list list-group">
        {elements}
    </ul>
  )
};


export default EmployeesList;