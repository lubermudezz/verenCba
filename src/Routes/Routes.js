import React from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import ItemDetailContainer from "../components/itemDetailContainer"
import NavBar from "../components/NavBar";
import ItemListContainer from "../components/ItemListContainer";

const Routes = () => {
    return (

        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route path = "/" element = {<ItemListContainer/>} />
                <Route path = "/category" element = {<ItemListContainer/>} />
                <Route path = "/item" element = {<ItemDetailContainer/>} />
                {/* <Route path="*" element={<NotFound />} /> */}
            </Switch>
        </BrowserRouter>




    );
};

export default Routes;