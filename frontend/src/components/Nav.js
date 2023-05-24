import React, { useState } from "react";
import { NavLink, useNavigate, Navigate } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userAction";
import {useAlert} from "react-alert";
import { useEffect } from "react";

const Nav = () => {

  const Nav = styled.nav`
    .navbar-lists {
      display: flex;
      gap: 4.8rem;
      align-items: center;

      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.8rem;
          font-weight: 500;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;
        }

        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }

    .mobile-navbar-btn {
      display: none;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }

    .mobile-nav-icon[name="close-outline"] {
      display: none;
    }

    .close-outline {
      display: none;
    }

    .cart-trolley--link {
      position: relative;

      .cart-trolley {
        position: relative;
        font-size: 3.2rem;
      }

      .cart-total--item {
        width: 2.4rem;
        height: 2.4rem;
        position: absolute;
        background-color: #000;
        color: #000;
        border-radius: 50%;
        display: grid;
        place-items: center;
        top: -20%;
        left: 70%;
        background-color: ${({ theme }) => theme.colors.helper};
      }
    }

    .user-login--name {
      text-transform: capitalize;
    }

    .user-logout,
    .user-login {
      font-size: 1.4rem;
      padding: 0.8rem 1.4rem;
      cursor: pointer;
      transition: all 0.2s;
      &:hover{
        color: ${({ theme }) => theme.colors.helper};
        transform: scale(0.9);
      }
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 9999;
        border: ${({ theme }) => theme.colors.black};

        .mobile-nav-icon {
          font-size: 4.2rem;
          color: ${({ theme }) => theme.colors.black};
        }
      }

      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 30%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
      }

      .active .close-outline {
        display: inline-block;
      }

      .navbar-lists {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        visibility: hidden;
        opacity: 0;
        transform: translateX(100%);
        /* transform-origin: top; */
        transition: all 3s linear;
      }

      .active .navbar-lists {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
        transform-origin: right;
        transition: all 3s linear;

        .navbar-link {
          font-size: 4.2rem;
        }
      }
      .cart-trolley--link {
        position: relative;

        .cart-trolley {
          position: relative;
          font-size: 5.2rem;
          
        }

        .cart-total--item {
          width: 4.2rem;
          height: 4.2rem;
          font-size: 2rem;
          background: red;
        }
      }

      .user-logout,
      .user-login {
        font-size: 2.2rem;
        padding: 0.8rem 1.4rem;
      &:hover{
        color: ${({ theme }) => theme.colors.helper};
      }
      }

    }
  `;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();
  const {user, isAuthenticated} = useSelector((state) => state.user);
  const {cartItems} = useSelector((state) => state.cart);

  

  
  const handleLogout = async () => {
    dispatch(logout());
    localStorage.clear();
    alert.success("Logout Successful");
    navigate("/");
    // setTimeout(() => {
    //   window.location.reload();
    // }, 1000);
    
  }

  const handleLogin = () => {
    navigate("/login");
    
  }



  return (
    <Nav>
      <div className="navbar">
        <ul className="navbar-lists">
        <li>
            <NavLink to="/admin/dashboard" className="navbar-link cart-trolley--link">
              <p className="user-login--name"><span style={{fontWeight: "600"}}>{isAuthenticated && `Welcome, ${user.name}`}</span></p>
            </NavLink>
          </li>
          <li>
            {isAuthenticated && <input type="button" value={"Logout"} className="user-logout" onClick={handleLogout} />}
            {!isAuthenticated && <input type="button" value={"Login"} className="user-login" onClick={handleLogin} />}
            
          </li>
          <li>
            <NavLink to="/cart" className="navbar-link cart-trolley--link">
              <FiShoppingCart className="cart-trolley" />
              <span className="cart-total--item">{cartItems.length}</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </Nav>
  );
};

export default Nav;
