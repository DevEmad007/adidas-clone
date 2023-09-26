import React from 'react';
import { Routes,Route } from 'react-router-dom';
import SharedLayout from './shared layout/SharedLayout';
import Home from './home';

const App = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<SharedLayout />}>
                    <Route index element={<Home />}></Route>
                    <Route path={'/men'} element={<Home />}></Route>
                </Route>
            </Routes>
        </>
    );
};

export default App;
