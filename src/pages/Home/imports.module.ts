import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LoginNavComponent from "../../shared/components/LoginNav/LoginNav";
import HomeNavComponent from "../../shared/components/HomeNav/HomeNavComponent";
import FeedHeader from "./components/FeedHeader/FeedHeader";
import Footer from "../../shared/components/Footer/Footer";
import Spinner from "../../shared/components/loaders/spinner/Spinner";
import Pagination from "../../shared/components/Pagination/Pagination";
import ErrorPage from "../../shared/pages/ErrorPage";
import ArticleList from "./components/ArticleList/ArticleList";
import styles from "./HomePage.module.scss";
import useFetch from "../../hooks/useFetch";

export {
    useDispatch,
    useSelector,
    clearUser,
    useNavigate,
    useState,
    LoginNavComponent,
    HomeNavComponent,
    FeedHeader,
    Footer,
    Spinner,
    Pagination,
    ErrorPage,
    ArticleList,
    styles,
    useFetch,
};
