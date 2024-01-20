import React from 'react';
import { RouteObject, createBrowserRouter } from "react-router-dom";

const routeConfig = [
    {
        path: "/",
        name: "Home",
    }
];

const AppRouter = createBrowserRouter(routeConfig.map<RouteObject>(route => {
    const Component = React.lazy(() => import(`@/pages/${route.name}`));
    return {
        path: route.path,
        element: (
            <React.Suspense fallback={<></>}>
                <Component />
            </React.Suspense>
        ),
    }
}), { basename: process.env.BASE_PATH });

export default AppRouter;