import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import { SectionContext, items } from "../contexts/SectionContext";
import LeftSidebar from "./LeftSidebar";
import Dashboard from "./Dashboard";

import "semantic-ui-css/semantic.min.css";
import "../index.css";
import SupplyPlan from "../pages/SupplyPlan";

function App() {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <SectionContext.Provider value={items}>
      <LeftSidebar activeItem={activeItem} onClickItem={handleItemClick} />

      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/scheme">
          <SupplyPlan />
        </Route>
      </Switch>
    </SectionContext.Provider>
  );
}

export default App;
