import { Sidebar } from "flowbite-react";

import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiOutlineCloudUpload,
} from "react-icons/hi";
import userImg from "../assets/profile.jpg";

const SidebarComponent = () => {
  return (
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Logo href="/" img={userImg} imgAlt="Flowbite logo">
        Books
      </Sidebar.Logo>
      <Sidebar.Items>
        {/* First Item Group */}
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item
            href="/admin/dashboard/upload"
            icon={HiOutlineCloudUpload}
          >
            Upload Book
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
            Manage Books
          </Sidebar.Item>


          <Sidebar.Item href="/logout" icon={HiArrowSmRight}>
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>


      </Sidebar.Items>
    </Sidebar>
  );
};

export default SidebarComponent;
