import React from 'react'

import './ContributorSelect.css'

const ContributorSelect = (props) => {

    return (
        <div className="select-container">
            <label for="contributor">Choose a contributor: </label>

            <select name="contributor" id="contributor">
            <option value="michael">Michael</option>
            <option value="kevin">Kevin</option>
            <option value="eric">Eric</option>
            <option value="katie">Katie</option>
            </select>
        </div>
    )
}

export default ContributorSelect
