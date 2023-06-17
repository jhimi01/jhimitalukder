import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./Ptoject.css";
import { Helmet } from "react-helmet";

const Projects = () => {
  return (
    <div>
     <Helmet>
            <title>Projects | Jhimi</title>
            <meta name="description" content="Nested component" />
        </Helmet>
      <Tabs>
        <TabList className="text-center">
          <Tab>Simple js</Tab>
          <Tab>React JS</Tab>
          <Tab>Node js</Tab>
          <Tab>Mongodb</Tab>
        </TabList>
        <hr />

        <TabPanel>
          <div className="flex items-center justify-center flex-wrap mt-5 gap-4">
            <div className="bg-white shadow-lg rounded-sm p-4">
              <img
                className="w-20 h-20"
                src="https://i.ibb.co/KrZqM0p/logo2.png"
                alt="logo"
              />
              <div className="mt-4">
                <h2 className="equal-word truncate w-[400px] text-gray-800">
                  github:{" "}
                  <a
                    className="underline text-indigo-600 "
                    href="https://github.com/jhimi01/collageAssignment.github.io"
                  >
                    https://github.com/jhimi01/collageAssignment.github.io
                  </a>
                </h2>
                <h3 className="equal-word truncate w-[400px] text-gray-800">
                  live link:{" "}
                  <a
                    className="underline text-indigo-600"
                    href="https://jhimi01.github.io/collageAssignment.github.io/"
                  >
                    https://jhimi01.github.io/collageAssignment.github.io/
                  </a>
                </h3>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-sm p-4">
            <img
                className="w-20 h-20 rounded-full object-cover"
                src="https://i.ibb.co/hZZszwL/pexels-irina-iriser-1233415.jpg"
                alt="logo"
              />
              <div className="mt-4">
              <h2 className="equal-word truncate w-[400px] text-gray-800">
                  github:{" "}
                  <a
                    className="underline text-indigo-600"
                    href="https://github.com/jhimi01/Blog.github.io"
                  >
                    https://github.com/jhimi01/Blog.github.io
                  </a>
                </h2>
                <h3 className="equal-word truncate w-[400px] text-gray-800">
                  live link:{" "}
                  <a
                    className="underline text-indigo-600"
                    href="https://jhimi01.github.io/Blog.github.io/"
                  >
                    https://jhimi01.github.io/Blog.github.io/
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </TabPanel>

        {/* react js */}
        <TabPanel>
          <div className="flex items-center justify-center flex-wrap gap-5 mt-5">
          <div className="bg-white shadow-lg rounded-sm p-4">
          <img
                className="w-20 h-20 rounded-full object-cover"
                src="https://i.ibb.co/vBzsfmB/pexels-christina-morillo-1181263.jpg"
                alt="logo"
              />
              <div className="mt-4">
              <h2 className="equal-word truncate w-[400px] text-gray-800">
                  github:{" "}
                  <a
                    className="underline text-indigo-600"
                    href="https://github.com/jhimi01/knowledge-cafe"
                  >
                    https://github.com/jhimi01/knowledge-cafe
                  </a>
                </h2>
                <h3 className="equal-word truncate w-[400px] text-gray-800">
                  live link:{" "}
                  <a
                    className="underline text-indigo-600"
                    href="https://b7a8-logiclab-jhimi01.vercel.app/"
                  >
                    https://b7a8-logiclab-jhimi01.vercel.app/
                  </a>
                </h3>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-sm p-4">
            <img
                className="w-20 h-20 rounded-full object-cover"
                src="https://i.ibb.co/kM49CpH/pexels-lukas-317356.jpg"
                alt="logo"
              />
              <div className="mt-4">
              <h2 className="equal-word truncate w-[400px] text-gray-800">
                  github:{" "}
                  <a
                    className="underline text-indigo-600"
                    target="_blank"
                    href="https://github.com/jhimi01/React-Notes"
                  >
                    https://github.com/jhimi01/React-Notes
                  </a>
                </h2>
                <h3 className="equal-word truncate w-[400px] text-gray-800">
                  live link:{" "}
                  <a
                    className="underline text-indigo-600"
                    target="_blank"
                    href="https://react-notes-green.vercel.app/"
                  >
                    https://react-notes-green.vercel.app/
                  </a>
                </h3>
              </div>
            </div>





            <div className="bg-white shadow-lg rounded-sm p-4">
            <img
                className="w-20 h-20 rounded-full object-cover"
                src="https://i.ibb.co/0JszrFv/pexels-pavel-danilyuk-8423051.jpg"
                alt="logo"
              />
              <div className="mt-4">
              <h2 className="equal-word truncate w-[400px] text-gray-800">
                  github:{" "}
                  <a
                    className="underline text-indigo-600"
                    target="_blank"
                    href="https://github.com/jhimi01/Knowledge-Store"
                  >
                    https://github.com/jhimi01/Knowledge-Store
                  </a>
                </h2>
                <h3 className="equal-word truncate w-[400px] text-gray-800">
                  live link:{" "}
                  <a
                    className="underline text-indigo-600"
                    target="_blank"
                    href="https://b7a9-career-hub-jhimi01.vercel.app/"
                  >
                    https://b7a9-career-hub-jhimi01.vercel.app/
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex items-center justify-center gap-5 mt-5">


          <div className="bg-white shadow-lg rounded-sm p-4">
          <img
                className="w-20 h-20 rounded-full object-cover"
                src="https://i.ibb.co/LRRk27F/pexels-elle-hughes-2696064.jpg"
                alt="logo"
              />
              <div className="mt-4">
              <h2 className="equal-word truncate w-[400px] text-gray-800">
                  github-client:{" "}
                  <a
                    className="underline text-indigo-600"
                    target="_blank"
                    href="https://github.com/jhimi01/wings-bakers-client"
                  >
                    https://github.com/jhimi01/wings-bakers-client
                  </a>
                </h2>

                <h2 className="equal-word truncate w-[400px] text-gray-800">
                  github-server:{" "}
                  <a
                    className="underline text-indigo-600"
                    target="_blank"
                    href="https://github.com/jhimi01/wings-bakers"
                  >
                    https://github.com/jhimi01/wings-bakers
                  </a>
                </h2>

                <h3 className="equal-word truncate w-[400px] text-gray-800">
                  live link:{" "}
                  <a
                    className="underline text-indigo-600"
                    target="_blank"
                    href="https://wings-bakers-assignment10.web.app"
                  >
                    https://wings-bakers-assignment10.web.app
                  </a>
                </h3>
              </div>
            </div>


            {/* <div className="p-4 card w-1/2">
              <img
                className="w-20 h-20 rounded-full object-cover"
                src="https://i.ibb.co/LRRk27F/pexels-elle-hughes-2696064.jpg"
                alt="logo"
              />
              <div>
                <h2 className="equal-word truncate w-[400px] text-gray-800">
                  github-client:{" "}
                  <a
                    className="underline text-indigo-600"
                    target="_blank"
                    href="https://github.com/jhimi01/wings-bakers-client"
                  >
                    https://github.com/jhimi01/wings-bakers-client
                  </a>
                </h2>

                <h2 className="equal-word truncate w-[400px] text-gray-800">
                  github-server:{" "}
                  <a
                    className="underline text-indigo-600"
                    target="_blank"
                    href="https://github.com/jhimi01/wings-bakers"
                  >
                    https://github.com/jhimi01/wings-bakers
                  </a>
                </h2>

                <h3 className="equal-word truncate w-[400px] text-gray-800">
                  live link:{" "}
                  <a
                    className="underline text-indigo-600"
                    target="_blank"
                    href="https://wings-bakers-assignment10.web.app"
                  >
                    https://wings-bakers-assignment10.web.app
                  </a>
                </h3>
              </div>
            </div> */}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex items-center justify-center flex-wrap gap-5 mt-5 ">



          <div className="bg-white shadow-lg rounded-sm p-4">
          <img
                className="w-20 h-20 rounded-full object-cover"
                src="https://i.ibb.co/YZHLVkB/pexels-natalie-bond-3759660-1.jpg"
                alt="logo"
              />
              <div className="mt-4">
              <h2 className="equal-word truncate w-[400px] text-gray-800">
                  github-client:{" "}
                  <a
                    className="underline text-indigo-600"
                    target="_blank"
                    href="https://github.com/jhimi01/yoga-school"
                  >
                    https://github.com/jhimi01/yoga-school
                  </a>
                </h2>
                <h2 className="equal-word truncate w-[400px] text-gray-800">
                  github-server:{" "}
                  <a
                    className="underline text-indigo-600 "
                    target="_blank"
                    href="https://github.com/jhimi01/yoga--school-server"
                  >
                    https://github.com/jhimi01/yoga--school-server
                  </a>
                </h2>
                <h3 className="equal-word truncate w-[400px] text-gray-800">
                  live link:{" "}
                  <a
                    className="underline text-indigo-600"
                    target="_blank"
                    href="https://yoga-school-7a5bc.web.app/"
                  >
                    https://yoga-school-7a5bc.web.app/
                  </a>
                </h3>
              </div>
            </div>



            <div className="bg-white shadow-lg rounded-sm p-4">
            <img
                className="w-20 h-20 rounded-full object-cover"
                src="https://i.ibb.co/PcJw88t/logo-30546d5e.png"
                alt="logo"
              />
              <div className="mt-4">
              <h2 className="equal-word truncate w-[400px] text-gray-800">
                  github-client:{" "}
                  <a
                    className="underline text-indigo-600"
                    target="_blank"
                    href="https://github.com/jhimi01/doll-galaxy"
                  >
                    https://github.com/jhimi01/doll-galaxy
                  </a>
                </h2>

                <h2 className="equal-word truncate w-[400px] text-gray-800">
                  github-server:{" "}
                  <a
                    className="underline text-indigo-600"
                    target="_blank"
                    href="https://github.com/jhimi01/doll-galaxy-server"
                  >
                    https://github.com/jhimi01/doll-galaxy-server
                  </a>
                </h2>

                <h3 className="equal-word truncate w-[400px] text-gray-800">
                  live link:{" "}
                  <a
                    className="underline text-indigo-600"
                    target="_blank"
                    href="https://toys-galaxy.web.app"
                  >
                    https://toys-galaxy.web.app
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Projects;
