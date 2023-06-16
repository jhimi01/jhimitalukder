import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import './Ptoject.css'

const Projects = () => {
    
    return (
        <div>
            <Tabs>
    <TabList className='text-center'>
      <Tab>Simple js</Tab>
      <Tab>React JS</Tab>
      <Tab>Node js</Tab>
      <Tab>Mongodb</Tab>
    </TabList>
    <hr />

    <TabPanel>
      <h2>javascript</h2>
    </TabPanel>
    <TabPanel>
      <h2>react js</h2>
    </TabPanel>
    <TabPanel>
      <h2>node js</h2>
    </TabPanel>
    <TabPanel>
      <h2>Mongodb</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default Projects;