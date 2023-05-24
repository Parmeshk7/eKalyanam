import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
// import "./myOrders.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, myOrders } from "../../actions/orderAction";
import Loader from "../layout/Loader";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import Typography from "@material-ui/core/Typography";
// import MetaData from "../layout/MetaData";
import LaunchIcon from "@mui/icons-material/Launch";
import styled from "styled-components";

const MyOrders = () => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const { loading, error, orders } = useSelector((state) => state.myOrders);
  const { user, isAuthenticated } = useSelector((state) => state.user);

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 300, flex: 1 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 150,
      flex: 0.5,
      cellClassName: "redColor",
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 150,
      flex: 0.3,
    },

    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      minWidth: 270,
      flex: 0.5,
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Link to={`/order/${params.row.id}`}>
            <LaunchIcon />
          </Link>
        );
      },
    },
  ];
  const rows = [];

  orders &&
    orders.forEach((item, index) => {
      rows.push({
        itemsQty: item.orderItems.length,
        id: item._id,
        status: item.orderStatus,
        amount: item.totalPrice,
      });
    });

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(myOrders());
  }, [dispatch, alert, error]);

  return (
    <Wrapper>
      {/* <MetaData title={`${user.name} - Orders`} /> */}

      {loading ? (
        <Loader />
      ) : (
        <div className="myOrdersPage">
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="myOrdersTable"
            autoHeight
          />

          {/* <Typography id="myOrdersHeading">{isAuthenticated && user.name}'s Orders</Typography> */}
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
.myOrdersPage {
  width: 100vw;
  max-width: 100%;
  padding: 0 7vmax;
  box-sizing: border-box;
  background-color: rgb(235, 235, 235);
  position: block;
  top: 0;
  left: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

#myOrdersHeading {
  text-align: center;
  font: 400 1.2vmax "Roboto";
  padding: 0.5vmax;
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  transition: all 0.5s;
  background-color: rgb(44, 44, 44);
}

.myOrdersTable {
  background-color: white;
}

.myOrdersTable div {
  font: 300 1vmax "Roboto";
  color: rgba(0, 0, 0, 0.678);
  border: none;
}

.myOrdersTable a {
  color: rgba(0, 0, 0, 0.527);
  transition: all 0.5s;
}

.myOrdersTable a:hover {
  color: tomato;
}

.MuiDataGrid-columnHeader {
  background-color: tomato;
  padding: 1vmax !important;
}

.MuiDataGrid-columnHeader div {
  color: rgb(255, 255, 255);
  font: 500 1.1vmax "Roboto" !important;
}

.MuiDataGrid-iconSeparator {
  display: none !important;
}

.greenColor{
    color: green;
    font-weight: 700;
}
.redColor{
    color: red;
    font-weight: 700;
}


@media screen and (max-width: 600px) {
  .myOrdersPage {
    padding: 0;
    height: 93vh;
  }

  #myOrdersHeading {
    font: 400 2.2vmax "Roboto";
    padding: 4vw;
  }

  .myOrdersTable div {
    font: 300 4vw "Roboto";
  }

  .MuiDataGrid-columnHeader {
    padding: 20px !important;
  }

  .MuiDataGrid-columnHeader div {
    font: 500 5vw "Roboto" !important;
  }
}
`

export default MyOrders;