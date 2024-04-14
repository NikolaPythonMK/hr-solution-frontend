import './Dashboard.css';
import CustomTabPanel from './DashboardTabs/CustomTabPanel';

export default function Dashboard(){
    return (
        <div>
            <h1>Dashboard</h1>
            <CustomTabPanel></CustomTabPanel>
        </div>
    );
}