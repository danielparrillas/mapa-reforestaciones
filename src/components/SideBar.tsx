// import UploadFile from "./UploadFile";
import { GeometryContainer } from "./GeometryContainer2";

export default function SideBar() {
  return (
    <div className="p-4 flex flex-col w-96">
      <h1>Coordenadas</h1>
      {/* <UploadFile /> */}
      <GeometryContainer />
    </div>
  );
}
