import React from "react";

import { Link } from "react-router-dom";
import { TreeView, TreeItem } from "@material-ui/lab";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PostAddIcon from "@mui/icons-material/PostAdd";
import AddIcon from "@mui/icons-material/Add";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import ListAltIcon from "@mui/icons-material/ListAlt";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import RateReviewIcon from "@mui/icons-material/RateReview";
import styled from "styled-components";

const Sidebar = () => {
  return (
    <Wrapper>
      <div className="sidebar">
        <Link to="/admin/dashboard">
          <p>
            <DashboardIcon /> Dashboard
          </p>
        </Link>
        <Link>
          <TreeView
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ImportExportIcon />}
          >
            <TreeItem nodeId="1" label={<p>Product</p>}>
              <Link to="/admin/products">
                <TreeItem nodeId="2" label={<p>All</p>} icon={<PostAddIcon />} />
              </Link>

              <Link to="/admin/product">
                <TreeItem nodeId="3" label={<p>Create</p>} icon={<AddIcon />} />
              </Link>
            </TreeItem>
          </TreeView>
        </Link>
        <Link>
          <TreeView
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ImportExportIcon />}
          >
            <TreeItem nodeId="1" label={<p>Prasad</p>}>
              <Link to="/admin/prasads">
                <TreeItem nodeId="2" label={<p>All</p>} icon={<PostAddIcon />} />
              </Link>

              <Link to="/admin/prasad">
                <TreeItem nodeId="3" label={<p>Create</p>} icon={<AddIcon />} />
              </Link>
            </TreeItem>
          </TreeView>
        </Link>
        <Link to="/admin/orders">
          <p>
            <ListAltIcon />
            Orders
          </p>
        </Link>
        <Link to="/admin/users">
          <p>
            <PeopleIcon /> Users
          </p>
        </Link>

      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`

.sidebar {
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  padding: 4rem 0;
}

.tree-item{
    font-size: 24px;
}
.sidebar > a:first-child {
  padding: 0;
}
.sidebar > a > img {
  width: 100%;
  transition: all 0.5s;
}


.sidebar > a > img:hover {
  filter: drop-shadow(0 0 10px tomato);
}
.sidebar a {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.493);
  font: 200 1rem "Roboto";
  padding: 2rem;
  transition: all 0.5s;
}
.sidebar a:hover {
  color: tomato;
  transform: scale(1.1);
}

.sidebar a > P {
  display: flex;
  align-items: center;
}
.sidebar a > p > svg {
  margin-right: 0.5rem;
}

.MuiTypography-root {
  background-color: #fff !important;
}
`

export default Sidebar;
