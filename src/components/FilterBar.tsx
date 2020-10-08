import React from "react";
import PropTypes from "prop-types";
import "./FilterBar.scss";
const classnames = require("classnames");

FilterBar.propTypes = {
    filter: PropTypes.string,
    changeFilter: PropTypes.func,
};

FilterBar.defaultProps = {
    filter: "all",
    changeFilter: null,
};

export default function FilterBar(prop: { filter?: string; changeFilter: Function }) {
    const { filter, changeFilter } = prop;

    return (
        <div className="filter-bar">
            <div className="bar-item" onClick={() => changeFilter("all")}>
                All
            </div>
            <div className="bar-item" onClick={() => changeFilter("active")}>
                Active
            </div>
            <div className="bar-item" onClick={() => changeFilter("done")}>
                Done
            </div>
            <div className={classnames("current", filter)}></div>
        </div>
    );
}
