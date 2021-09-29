import React from "react";

import Navigation from "./components/Navigation";
import Greetings from "./containers/Greetings";
import Skills from "./containers/Skills";
import Proficiency from "./containers/Proficiency";
import Education from "./containers/Education";
import Experience from "./containers/Experience";
import Projects from "./containers/Projects";
import GithubProfile from "./containers/GithubProfile";

import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/css/argon-design-system-react.css";

const App = () => {
  return (
    <>
		<Navigation />
		<Greetings />
		<Skills />
		<Proficiency />
		<Education />
		<Experience />
		<Projects />
		<GithubProfile />
	</>  
  );
};

export default App;
