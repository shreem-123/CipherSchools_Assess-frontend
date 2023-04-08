import './Bell.css';
import {BellOutlined} from "@ant-design/icons";


export function Bell() {
    return (
      <div className={"container-bell"}>
        <span>0</span>
        <BellOutlined size={22} className={"bell_icon"} />
      </div>
    );
  }