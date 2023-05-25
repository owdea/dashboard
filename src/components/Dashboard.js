import DataBox from './DataBox';
import GraphBox from './GraphBox';
import AlertBox from './AlertBox';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

function Dashboard(props) {

  const { DataBoxes } = props;

  return (
    <div className="Dashboard">
        <div>
            <h1 className="DashboardTitle">Title</h1>
        </div>
        <div className="Container">
        {DataBoxes.map((dataBox, index) => (
          <DataBox
            key={index}
            title={dataBox.title}
            data={dataBox.data}
            unit={dataBox.unit}
            img={dataBox.img}
            imgAlt={dataBox.imgAlt}
          />
        ))}
        </div>
        <div className='Container'>
            <GraphBox title="Temperature" dataWithDate={props.generatedData}/>
            <AlertBox title="Alert history"/>
        </div>
    </div>
  );
}

export default Dashboard;