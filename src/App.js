import React from "react";
// import Iconpage from "./Iconpage";
//fontawesomelib
import {library} from '@fortawesome/fontawesome-svg-core'
//importing the icons
import {fab} from '@fortawesome/free-brands-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'

import Mainpanel from "./components/Mainpanel";
function App() {
  return (
    <div className="App">
      {/* <Iconpage /> */}
      <Mainpanel />
    </div>
  );
}

export default App;
library.add(fab,fas,far)