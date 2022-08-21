import './app-info.css';

const AppInfo = ({employees, increased}) => { 
    return (
      <div className="app-info">
        <h1>Accounting employees of company N</h1>
        <h2>Total number of employees: {employees}</h2>
        <h2>Will receive the award: {increased}</h2>
      </div>
    );
};


export default AppInfo;