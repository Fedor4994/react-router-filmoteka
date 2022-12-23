import _slicedToArray from"/home/runner/work/react-router-filmoteka/react-router-filmoteka/node_modules/@babel/runtime/helpers/esm/slicedToArray.js";import React from'react';import{useParams,useLocation,useNavigate}from'react-router-dom';import{fetchFilmById}from'fetchData';import{useState,useEffect}from'react';import{ThreeDots}from'react-loader-spinner';import s from'./MovieDetails.module.css';import{ImReply}from'react-icons/im';import{jsx as _jsx}from"react/jsx-runtime";import{jsxs as _jsxs}from"react/jsx-runtime";import{Fragment as _Fragment}from"react/jsx-runtime";var MovieDetails=function MovieDetails(){var location=useLocation()||'';var _useState=useState(false),_useState2=_slicedToArray(_useState,2),isLoading=_useState2[0],setIsLoading=_useState2[1];var navigate=useNavigate();var _useState3=useState(null),_useState4=_slicedToArray(_useState3,2),film=_useState4[0],setFilm=_useState4[1];var _useParams=useParams(),movieId=_useParams.movieId;var getGeners=function getGeners(genresArr){var geners=genresArr.map(function(genre){return genre.name;}).join(', ');return geners;};useEffect(function(){setIsLoading(true);fetchFilmById(Number(movieId)).then(function(data){setFilm(data);setIsLoading(false);});},[movieId]);var goBack=function goBack(){var _location$state;navigate(((_location$state=location.state)===null||_location$state===void 0?void 0:_location$state.from)||'/');};return/*#__PURE__*/_jsx(_Fragment,{children:isLoading?/*#__PURE__*/_jsx("div",{className:s.loader,children:/*#__PURE__*/_jsx(ThreeDots,{height:"80",width:"80",radius:"9",color:"#ccc",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:true})}):film&&/*#__PURE__*/_jsxs("div",{style:{backgroundImage:"url(\n              https://image.tmdb.org/t/p/w1280".concat(film.backdrop_path,"\n            )"),backgroundRepeat:'no-repeat',backgroundPosition:'center center',backgroundSize:'cover',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'},className:s.movieContainer,children:[/*#__PURE__*/_jsx("div",{className:s.buttonContainer,children:/*#__PURE__*/_jsxs("button",{className:s.goback,type:"button",onClick:goBack,children:[/*#__PURE__*/_jsx(ImReply,{})," Go back"]})}),/*#__PURE__*/_jsxs("div",{className:s.movieContent,children:[film.poster_path?/*#__PURE__*/_jsx("img",{className:s.moviePoster,src:"https://image.tmdb.org/t/p/w500".concat(film.poster_path),alt:film.title}):/*#__PURE__*/_jsx("div",{className:s.noImg}),/*#__PURE__*/_jsxs("div",{className:s.movieInfo,children:[/*#__PURE__*/_jsx("h2",{className:s.movieTitle,children:"".concat(film.title," (").concat(film.release_date.slice(0,4),")")}),/*#__PURE__*/_jsx("p",{className:s.movieText,children:"User score: ".concat(film.vote_average&&parseInt(film.vote_average*10),"%")}),/*#__PURE__*/_jsxs("h3",{className:s.movieSubTitle,children:[film.overview&&'Overview',' ',/*#__PURE__*/_jsx("p",{className:s.movieText,children:film.overview})]}),/*#__PURE__*/_jsxs("h3",{className:s.movieSubTitle,children:[getGeners(film.genres)&&'Genres',/*#__PURE__*/_jsx("p",{className:s.movieText,children:getGeners(film.genres)})]})]})]})]})});};export default MovieDetails;