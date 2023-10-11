import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './app.css'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     // children: [
//     //   {
//     //     path: "team",
//     //     element: <Team />,
//     //     loader: teamLoader,
//     //   },
//     // ],
//   },
// ]);

const router = createBrowserRouter([
  {
      path: "/",
      element: <App />,
      // errorElement: <Error404 />,
      children: [
          {
              path: "/",
              element: <App />,
          },
          {
              // path: "/signin",
              // element: <Signin />,
          },
          // {
          //     path: "/A_propos",
          //     element: <A_propos />,
          // },
      ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />

    </Provider>
  </React.StrictMode>,
)
