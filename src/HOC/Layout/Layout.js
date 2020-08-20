import React from "react";
import classes from "./Layout.module.css";


const Layout = (props) => {
    return(
        <div className={classes.Layout}>
            <div className={classes.shadow}>
                {props.children}
            </div>
        </div>
    )

}

export default Layout
