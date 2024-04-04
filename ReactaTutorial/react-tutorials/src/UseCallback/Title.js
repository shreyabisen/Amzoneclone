import React from 'react'

function Title() {
    console.log('Title Renderd');
    return (
        <div>
            <h1>UseCallback</h1>

        </div>
    )
}

export default React.memo(Title)