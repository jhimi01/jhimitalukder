import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./Ptoject.css";
import { Helmet } from "react-helmet";
import LazyLoad from "react-lazy-load";

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
        </TabList>
        <hr />

        {/* ---------------------- Teamproject --------------------- */}

        <TabPanel>
          <div className="flex items-center justify-center flex-wrap mt-5 gap-4">
            <div className="bg-white shadow-lg rounded-sm p-4">
              <LazyLoad effect="blur">
                <img
                  className="w-full h-44 object-cover"
                  src="https://i.ibb.co/JrxvB4V/Screenshot-76566.png"
                  alt="logo"
                />
              </LazyLoad>
              <div className="mt-4 w-full">
                <h2 className="equal-word truncate  text-gray-800">
                  github:
                  <a
                    target="_blank"
                    className="underline text-indigo-600 "
                    href="https://github.com/abcmehedi5/lang-master-client"
                  >
                    https://github.com/abcmehedi5/lang-master-client
                  </a>
                </h2>
                <h3 className="equal-word truncate  text-gray-800">
                  live link:
                  <a
                    target="_blank"
                    className="underline text-indigo-600"
                    href="https://langmaster.netlify.app/"
                  >
                    https://langmaster.netlify.app/
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </TabPanel>

        {/* ---------------------- javascript --------------------- */}

        <TabPanel>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 my-5">
            <div className="bg-white shadow-lg rounded-sm p-4">
              <LazyLoad effect="blur">
                <img
                  className="w-full h-44 object-cover"
                  src="https://i.ibb.co/1Ms1bqz/Screenshot-482.png"
                  alt="logo"
                />
              </LazyLoad>
              <div className="mt-4 w-full">
                <h2 className="equal-word truncate  text-gray-800">
                  github:
                  <a
                    target="_blank"
                    className="underline text-indigo-600 "
                    href="https://github.com/jhimi01/collageAssignment.github.io"
                  >
                    https://github.com/jhimi01/collageAssignment.github.io
                  </a>
                </h2>
                <h3 className="equal-word truncate  text-gray-800">
                  live link:
                  <a
                    target="_blank"
                    className="underline text-indigo-600"
                    href="https://jhimi01.github.io/collageAssignment.github.io/"
                  >
                    https://jhimi01.github.io/collageAssignment.github.io/
                  </a>
                </h3>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-sm p-4">
              <LazyLoad effect="blur">
                <img
                  className="w-full h-44 object-cover"
                  src="https://i.ibb.co/YBT1VrP/Screenshot-483.png"
                  alt="logo"
                />
              </LazyLoad>

              <div className="mt-4 w-full">
                <h2 className="equal-word truncate  text-gray-800">
                  github:
                  <a
                    target="_blank"
                    className="underline text-indigo-600"
                    href="https://github.com/jhimi01/Blog.github.io"
                  >
                    https://github.com/jhimi01/Blog.github.io
                  </a>
                </h2>
                <h3 className="equal-word truncate  text-gray-800">
                  live link:
                  <a
                    target="_blank"
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

        {/* ---------------------- react js --------------------- */}

        <TabPanel>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 my-5">
            {/* --------------- project one 1 */}
            <div className="bg-white shadow-lg rounded-sm p-4">
              <LazyLoad effect="blur">
                <img
                  className="w-full h-44 object-cover"
                  src="https://i.ibb.co/7jLnJWz/Screenshot-484.png"
                  alt="logo"
                />
              </LazyLoad>

              <div className="mt-4 w-full">
                <h2 className="equal-word truncate  text-gray-800">
                  github:
                  <a
                    target="_blank"
                    className="underline text-indigo-600"
                    href="https://github.com/jhimi01/knowledge-cafe"
                  >
                    https://github.com/jhimi01/knowledge-cafe
                  </a>
                </h2>
                <h3 className="equal-word truncate  text-gray-800">
                  live link:
                  <a
                    target="_blank"
                    className="underline text-indigo-600"
                    href="https://b7a8-logiclab-jhimi01.vercel.app/"
                  >
                    https://b7a8-logiclab-jhimi01.vercel.app/
                  </a>
                </h3>
              </div>
            </div>

            {/* --------------- project two 2 */}
            <div className="bg-white shadow-lg rounded-sm p-4">
              <LazyLoad effect="blur">
                <img
                  className="w-full h-44 object-cover"
                  src="https://i.ibb.co/7J5htB4/Screenshot-542.png"
                  alt="logo"
                />
              </LazyLoad>

              <div className="mt-4 w-full">
                <h2 className="equal-word truncate  text-gray-800">
                  github:
                  <a
                    className="underline text-indigo-600"
                    target="_blank"
                    href="https://github.com/jhimi01/doctors-care"
                  >
                    https://github.com/jhimi01/doctors-care
                  </a>
                </h2>
                <h3 className="equal-word truncate  text-gray-800">
                  live link:
                  <a
                    className="underline text-indigo-600"
                    target="_blank"
                    href="https://doctor-care-71f28.web.app/"
                  >
                    https://doctor-care-71f28.web.app/
                  </a>
                </h3>
              </div>
            </div>

            {/* --------------- project two 3 */}
            <div className="bg-white shadow-lg rounded-sm p-4">
              <LazyLoad effect="blur">
                <img
                  className="w-full h-44 object-cover"
                  src="https://i.ibb.co/rvD89X1/Screenshot-485.png"
                  alt="logo"
                />
              </LazyLoad>

              <div className="mt-4 w-full">
                <h2 className="equal-word truncate  text-gray-800">
                  github:
                  <a
                    className="underline text-indigo-600"
                    target="_blank"
                    href="https://github.com/jhimi01/React-Notes"
                  >
                    https://github.com/jhimi01/React-Notes
                  </a>
                </h2>
                <h3 className="equal-word truncate  text-gray-800">
                  live link:
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

            {/* --------------- project four 4 */}
            <div className="bg-white shadow-lg rounded-sm p-4">
              <LazyLoad effect="blur">
                <img
                  className="w-full h-44 object-cover"
                  src="https://i.ibb.co/G907TMx/Screenshot-487.png"
                  alt="logo"
                />
              </LazyLoad>

              <div className="mt-4 w-full">
                <h2 className="equal-word truncate  text-gray-800">
                  github-client:
                  <a
                    className="underline text-indigo-600"
                    target="_blank"
                    href="https://github.com/jhimi01/wings-bakers-client"
                  >
                    https://github.com/jhimi01/wings-bakers-client
                  </a>
                </h2>

                <h3 className="equal-word truncate  text-gray-800">
                  live link:
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

            {/* --------------- project four 5 */}
            <div className="bg-white shadow-lg rounded-sm p-4">
              <LazyLoad effect="blur">
                <img
                  className="w-full h-44 object-cover"
                  src="https://i.ibb.co/B2MZ4B5/Screenshot-486.png"
                  alt="logo"
                />
              </LazyLoad>

              <div className="mt-4 w-full">
                <h2 className="equal-word truncate  text-gray-800">
                  github:
                  <a
                    className="underline text-indigo-600"
                    target="_blank"
                    href="https://github.com/jhimi01/Knowledge-Store"
                  >
                    https://github.com/jhimi01/Knowledge-Store
                  </a>
                </h2>
                <h3 className="equal-word truncate  text-gray-800">
                  live link:
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

        {/* ------------ mongodb --------------------- */}
        <TabPanel>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 my-5">
            {/* --------------- project one 1 */}
            <div className="bg-white shadow-lg rounded-sm p-4">
              <LazyLoad effect="blur">
                <img
                  className="w-full h-44 object-cover"
                  src="https://i.ibb.co/sP3Vbqb/Screenshot-854.png"
                  alt="logo"
                />
              </LazyLoad>

              <div className="mt-4 w-full overflow-hidden">
                <h2 className="equal-word truncate w-[400px] text-gray-800">
                  github-client:
                  <a
                    className="underline text-indigo-600"
                    target="_blank"
                    href="https://github.com/jhimi01/yoga-school"
                  >
                    https://github.com/jhimi01/yoga-school
                  </a>
                </h2>
                <h2 className="equal-word truncate  text-gray-800">
                  github-server:
                  <a
                    className="underline text-indigo-600 "
                    target="_blank"
                    href="https://github.com/jhimi01/yoga--school-server"
                  >
                    https://github.com/jhimi01/yoga--school-server
                  </a>
                </h2>
                <h3 className="equal-word truncate  text-gray-800">
                  live link:
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

            {/* --------------- project two 2 */}
            <div className="bg-white shadow-lg rounded-sm p-4">
              <LazyLoad effect="blur">
                <img
                  className="w-full h-44 object-cover"
                  src="https://i.ibb.co/9cn1RkQ/Screenshot-541.png"
                  alt="logo"
                />
              </LazyLoad>

              <div className="mt-4 w-full text-center overflow-hidden">
                <h2 className="equal-word truncate  text-gray-800">
                  github-client:
                  <a
                    className="underline text-indigo-600"
                    target="_blank"
                    href="https://github.com/jhimi01/Colleges-service"
                  >
                    https://github.com/jhimi01/Colleges-service
                  </a>
                </h2>

                <h2 className="equal-word truncate  text-gray-800">
                  github-server:
                  <a
                    className="underline text-indigo-600"
                    target="_blank"
                    href="https://github.com/jhimi01/Colleges-service-server"
                  >
                    https://github.com/jhimi01/Colleges-service-server
                  </a>
                </h2>

                <h3 className="equal-word truncate  text-gray-800">
                  live link:
                  <a
                    className="underline text-indigo-600"
                    target="_blank"
                    href="https://college-service-a34bb.web.app/"
                  >
                    https://college-service-a34bb.web.app/
                  </a>
                </h3>
              </div>
            </div>

            {/* --------------- project three 3 */}
            <div className="bg-white shadow-lg rounded-sm p-4">
              <LazyLoad effect="blur">
                <img
                  className="w-full h-44 object-cover"
                  src="https://i.ibb.co/x5VWsNc/Screenshot-490.png"
                  alt="logo"
                />
              </LazyLoad>

              <div className="mt-4 w-full text-center overflow-hidden">
                <h2 className="equal-word truncate  text-gray-800">
                  github-client:
                  <a
                    className="underline text-indigo-600"
                    target="_blank"
                    href="https://github.com/jhimi01/doll-galaxy"
                  >
                    https://github.com/jhimi01/doll-galaxy
                  </a>
                </h2>

                <h2 className="equal-word truncate  text-gray-800">
                  github-server:
                  <a
                    className="underline text-indigo-600"
                    target="_blank"
                    href="https://github.com/jhimi01/doll-galaxy-server"
                  >
                    https://github.com/jhimi01/doll-galaxy-server
                  </a>
                </h2>

                <h3 className="equal-word truncate  text-gray-800">
                  live link:
                  <a
                    className="underline text-indigo-600"
                    target="_blank"
                    href=" https://doll-galaxy.vercel.app"
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
