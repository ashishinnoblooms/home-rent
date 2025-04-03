import propertyList from "./component/propertyList";
import PropertyList from "./component/propertyList";
import Client from "./component/Client";
import Agent from "./component/Agent";

export default function Home() {
  return (
    <div>
      <PropertyList/>
      <Client/>
      <Agent/>
    </div>
  );
}
