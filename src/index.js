import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Guide from './pages/guide/Guide'
import Schedule from './pages/schedule/Schedule'
import Trial from './pages/trial/Trial'
import Join from './pages/join/Join'
import Faq from './pages/faq/Faq'
import Media from './pages/media/Media'
import Bestofnest from './pages/media/events/bestofnest/Bestofnest'
import Mmhc from './pages/media/events/mmhc/Mmhc'
import Aiyara from './pages/media/events/aiyara/Aiyara'
import Firstweek from './pages/media/events/firstweek/Firstweek'

import './index.css';

import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
        path: "/Muaythai-Guide",
        element: <Guide/>,
    },

    {
      path:"/Schedule-and-Fees",
      element: <Schedule/>,
    },

    {
      path:"/Free-Trial",
      element: <Trial/>,
    },

    {
      path:"/Join-Us",
      element: <Join/>,
    },
    {
      path:"/Faq",
      element: <Faq/>,
    },
    {
      path: "/Media",
      element: <Media/>
    },
    {
      path:"/Best-of-the-Nest",
      element: <Bestofnest/>
    },
    {
      path:"/Mens-Mental-Health-Collab",
      element: <Mmhc/>
    },
    {
      path:"/Thai-Aiyara-Collab",
      element: <Aiyara/>
    },

    {
      path:"/Firstweek",
      element: <Firstweek/>
    }

  ]);
  
  ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);

 


