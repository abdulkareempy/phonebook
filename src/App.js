import React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./App.css"

import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "./reducers";
import Recent from "./components/Recent";
import PhoneBook from "./components/PhoneBook";
import Favorite from "./components/Favorite";

const store = createStore(allReducers);
function App() {
  const [value, setValue] = React.useState(1);
    return (
        <Provider store={store}>
            <div className = "main">
                <Box sx={{ maxWidth: 700,margin:"auto" }}>
                    <BottomNavigation
                        showLabels
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                            console.log(newValue);
                        }}
                    >
                        <BottomNavigationAction
                            label="Recents"
                            icon={<RestoreIcon />}
                        />
                            <BottomNavigationAction
                                label="PhoneBook"
                                icon={<LocationOnIcon />}
                            />
                        <BottomNavigationAction
                            label="Favorites"
                            icon={<FavoriteIcon />}
                        />
                        
                    </BottomNavigation>
                </Box>
                {value === 0? <Recent/>:(value === 1?<PhoneBook/>:<Favorite/>)}
            </div>
        </Provider>
    );
}

export default App;
