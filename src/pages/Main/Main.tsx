import Advertising from "./sections/Advertising";
import Create from "./sections/Create";
import Following from "./sections/Following";
import Gift from "./sections/Gifts";
import MobileApplication from "./sections/MobileApplication";
import Navbar from "./sections/Navbar";

function Main() {
  return (
    <>
      <Advertising />
      <Navbar/>
      <MobileApplication />
      <Following />
      <Gift />
      <Create />
    </>
  );
}

export default Main;
