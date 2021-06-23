import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Masthead } from "sgds-govtech-react/dist/standard";

import {
  MainNav as MainNavComposable,
  MainNavBrand,
  MainNavBurger,
  MainNavDropdown,
  MainNavItem,
  MainNavMenu,
  MainNavMenuStart,
  MainNavMenuEnd,
} from "sgds-govtech-react/dist/standard";

const ComposableMainNav1 = () => {
  const [showNavMenu, setShowNavMenu] = useState(false);
  return (
    <MainNavComposable>
      <MainNavBrand>
        <MainNavItem href="/">
          <img src="https://www.designsystem.gov.sg/assets/img/logo_sgds.png" alt="main logo" />
        </MainNavItem>
        <MainNavBurger onClick={() => setShowNavMenu(!showNavMenu)} expand={showNavMenu} />
      </MainNavBrand>
      <MainNavMenu expand={showNavMenu}>
        <MainNavMenuStart>
          <MainNavItem href="#!" isActive>
            isActive
          </MainNavItem>
          <MainNavItem href="#!" isUpperCase isTab>
            isUpperCase &amp; isTab
          </MainNavItem>
          {/* use the 'as' prop to MainNavItem to use any component, such as a react-router 'Link'. */}
          <MainNavItem as={Link} isTab to="#!">
            Custom component
          </MainNavItem>
          <MainNavDropdown label="Hover dropdown" onClick={() => console.log("Clicked!")}>
            <MainNavItem href="#!">Dropdown item 1</MainNavItem>
            <MainNavItem as={Link} to="#!">
              Dropdown item 2
            </MainNavItem>
          </MainNavDropdown>
        </MainNavMenuStart>
      </MainNavMenu>
    </MainNavComposable>
  );
};

function PageHeader() {
  return (
    <>
      <Masthead />
      <ComposableMainNav1 />
    </>
  );
}

export default PageHeader;
