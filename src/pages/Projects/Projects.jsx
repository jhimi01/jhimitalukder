import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./Ptoject.css";
import { Helmet } from "react-helmet";
import ProjectCard from "./ProjectCard";
import fb from "../../../public/fb.png";
import yoga from "../../../public/doyoga.png";

const Projects = () => {
  return (
    <div>
      <Helmet>
        <title>Projects | Jhimi</title>
        <meta name="description" content="Nested component" />
      </Helmet>
      <Tabs>
        <TabList className="text-center">
          <Tab>Team project</Tab>
          <Tab>Simple js</Tab>
          <Tab>React JS</Tab>
          <Tab>MernStack</Tab>
          <Tab>Next Js</Tab>
        </TabList>
        <hr />

        {/* team project */}
        <TabPanel>
          <div className="flex items-center justify-center flex-wrap mt-5 gap-4">
            <ProjectCard
              projectname={"Lang Master"}
              imageSrc="https://i.ibb.co/JrxvB4V/Screenshot-76566.png"
              githubLink="https://github.com/abcmehedi5/lang-master-client"
              liveLink="https://langmaster.netlify.app/"
            />
          </div>
        </TabPanel>
        {/* simple js */}
        <TabPanel>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 my-5">
            <ProjectCard
              projectname={"Lienuxiy Cars"}
              imageSrc="https://i.ibb.co/1Ms1bqz/Screenshot-482.png"
              githubLink="https://github.com/jhimi01/collageAssignment.github.io"
              liveLink="https://jhimi01.github.io/collageAssignment.github.io/"
            />
            <ProjectCard
              projectname={"Tour-travel"}
              imageSrc="/public/banner.png"
              githubLink="https://github.com/jhimi01/tour-travel"
              liveLink="https://jhimi01.github.io/tour-travel/"
            />
            <ProjectCard
              projectname={"green."}
              imageSrc="https://i.ibb.co/YBT1VrP/Screenshot-483.png"
              githubLink="https://github.com/jhimi01/Blog.github.io"
              liveLink="https://jhimi01.github.io/Blog.github.io/"
            />
          </div>
        </TabPanel>

        {/* react js */}
        <TabPanel>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 my-5">
            <ProjectCard
              projectname={"LogicLab"}
              imageSrc="https://i.ibb.co/7jLnJWz/Screenshot-484.png"
              githubLink="https://github.com/jhimi01/knowledge-cafe"
              liveLink="https://b7a8-logiclab-jhimi01.vercel.app/"
            />
            <ProjectCard
              projectname={"DoctorCare"}
              imageSrc="https://i.ibb.co/7J5htB4/Screenshot-542.png"
              githubLink="https://github.com/jhimi01/doctors-care"
              liveLink="https://doctor-care-71f28.web.app/"
            />
            <ProjectCard
              projectname={"Notes"}
              imageSrc="https://i.ibb.co/rvD89X1/Screenshot-485.png"
              githubLink="https://github.com/jhimi01/React-Notes"
              liveLink="https://react-notes-green.vercel.app/"
            />
            <ProjectCard
              projectname={"Wings Bakers"}
              imageSrc="https://i.ibb.co/G907TMx/Screenshot-487.png"
              githubLink="https://github.com/jhimi01/wings-bakers-client"
              liveLink="https://wings-bakers-assignment10.web.app"
            />
            <ProjectCard
              projectname={"Knowledge Store"}
              imageSrc="https://i.ibb.co/B2MZ4B5/Screenshot-486.png"
              githubLink="https://github.com/jhimi01/Knowledge-Store"
              liveLink="https://b7a9-career-hub-jhimi01.vercel.app/"
            />
          </div>
        </TabPanel>

        {/* mernstack */}
        <TabPanel>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 my-5">
            <ProjectCard
              projectname={"DoYoga"}
              imageSrc={yoga}
              githubLink="https://github.com/jhimi01/yoga-school"
              serverLink="https://github.com/jhimi01/yoga--school-server"
              liveLink="https://yoga-school.vercel.app/"
            />
            <ProjectCard
              projectname={"Facebook"}
              imageSrc={fb}
              githubLink="https://github.com/jhimi01/facebook"
              serverLink="https://github.com/jhimi01/facebook-server"
              liveLink="https://facebook-green-nine.vercel.app/"
            />
            <ProjectCard
              projectname={"College Service"}
              imageSrc="https://i.ibb.co/9cn1RkQ/Screenshot-541.png"
              githubLink="https://github.com/jhimi01/Colleges-service"
              serverLink="https://github.com/jhimi01/Colleges-service-server"
              liveLink="https://college-service-a34bb.web.app/"
            />
            <ProjectCard
              projectname={"Doll Galaxy"}
              imageSrc="https://i.ibb.co/x5VWsNc/Screenshot-490.png"
              githubLink="https://github.com/jhimi01/doll-galaxy"
              serverLink="https://github.com/jhimi01/doll-galaxy-server"
              liveLink="https://doll-galaxy.vercel.app/"
            />
          </div>
        </TabPanel>

        {/* next js */}
        <TabPanel>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 my-5">
            <ProjectCard
              projectname={"Maximo-shop"}
              imageSrc="https://i.ibb.co/ygfBrSj/Screenshot-200.png"
              githubLink="https://github.com/jhimi01/maximo-shop"
              liveLink="https://maximo-shop.vercel.app/"
            />
            <ProjectCard
              projectname={"Venturer"}
              imageSrc="https://i.ibb.co/V307Z8N/Screenshot-201.png"
              githubLink="https://github.com/jhimi01/nextjs-blog"
              liveLink="https://nextjs-blog-omega-gilt.vercel.app/"
            />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Projects;
