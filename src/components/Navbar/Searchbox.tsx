import './Searchbox.css';
import {SearchOutlined} from '@ant-design/icons';

export function SearchBox() {
    return (
      <div className={"container-search"}>
        <SearchOutlined size={16} className={"icon"} />
        <input placeholder="Search and Learn" />
        {/* <CgOptions color="#fff" size={18} className={"icon"} /> */}
      </div>
    );
  }