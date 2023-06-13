// import UploadFile from "./UploadFile";
import { GeometryContainer } from "./GeometryContainer2";

export default function SideBar() {
  return (
    <div className="p-4 flex flex-col overflow-auto h-screen">
      <h1>Sidebar</h1>
      {/* <UploadFile /> */}
      <GeometryContainer />
    </div>
  );
}
