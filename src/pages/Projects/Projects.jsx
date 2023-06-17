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
      <div className="p-4">
        <img className="w-20 h-20" src="https://i.ibb.co/KrZqM0p/logo2.png" alt="logo" />
           <div>
            <h2>github: <a className="underline text-indigo-600" href="https://github.com/jhimi01/collageAssignment.github.io">https://github.com/jhimi01/collageAssignment.github.io</a></h2>
            <h3>live link: <a className="underline text-indigo-600" href="https://jhimi01.github.io/collageAssignment.github.io/">https://jhimi01.github.io/collageAssignment.github.io/</a></h3>
           </div>
      </div>
      <div className="p-4">
        <img className="w-20 h-20 rounded-full object-cover" src="https://i.ibb.co/hZZszwL/pexels-irina-iriser-1233415.jpg" alt="logo" />
           <div>
            <h2>github: <a className="underline text-indigo-600" href="https://github.com/jhimi01/Blog.github.io">https://github.com/jhimi01/Blog.github.io</a></h2>
            <h3>live link: <a className="underline text-indigo-600" href="https://jhimi01.github.io/Blog.github.io/">https://jhimi01.github.io/Blog.github.io/</a></h3>
           </div>
      </div>
    </TabPanel>

    {/* react js */}
    <TabPanel>
    <div className="p-4">
        <img className="w-20 h-20 rounded-full object-cover" src="https://i.ibb.co/hZZszwL/pexels-irina-iriser-1233415.jpg" alt="logo" />
           <div>
            <h2>github: <a className="underline text-indigo-600" href="https://github.com/jhimi01/knowledge-cafe">https://github.com/jhimi01/knowledge-cafe</a></h2>
            <h3>live link: <a className="underline text-indigo-600" href="https://b7a8-logiclab-jhimi01.vercel.app/">https://b7a8-logiclab-jhimi01.vercel.app/</a></h3>
           </div>
      </div>
    <div className="p-4">
        <img className="w-20 h-20 rounded-full object-cover" src="https://i.ibb.co/hZZszwL/pexels-irina-iriser-1233415.jpg" alt="logo" />
           <div>
            <h2>github: <a className="underline text-indigo-600" href="https://github.com/jhimi01/React-Notes">https://github.com/jhimi01/React-Notes</a></h2>
            <h3>live link: <a className="underline text-indigo-600" href="https://react-notes-green.vercel.app/">https://react-notes-green.vercel.app/</a></h3>
           </div>
      </div>
    <div className="p-4">
        <img className="w-20 h-20 rounded-full object-cover" src="https://i.ibb.co/hZZszwL/pexels-irina-iriser-1233415.jpg" alt="logo" />
           <div>
            <h2>github: <a className="underline text-indigo-600" href="https://github.com/jhimi01/Knowledge-Store">https://github.com/jhimi01/Knowledge-Store</a></h2>
            <h3>live link: <a className="underline text-indigo-600" href="https://b7a9-career-hub-jhimi01.vercel.app/">https://b7a9-career-hub-jhimi01.vercel.app/</a></h3>
           </div>
      </div>
    </TabPanel>
    <TabPanel>
      <h2>wings bakers</h2>
    </TabPanel>
    <TabPanel>
      <h2>toy galaxy</h2>
      <h2>yoga shcool</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default Projects;