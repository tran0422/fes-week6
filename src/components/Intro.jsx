import React from 'react'

const RenderHtmlStructure = ({ text }) => {
      // Split the text into an array based on newlines
      const formattedText = text.split('\n').map((line, index) => (
        <React.Fragment key={index}>
            {line}
            <br />
        </React.Fragment>
    ));

    return (
        <div className='info-box'>
            <p className='font-medium sm:text-xl text-center'>
                {formattedText}
            </p>
        </div>
    )
};

const renderContent = {
    1: (<RenderHtmlStructure
        text="Buying a home can feel overwhelming, but don't worry – you're not alone in this journey! Zoom in! Then spin the house to its right."
    />),
    2: (<RenderHtmlStructure
        text="This guide provides an estimate based on standard practices, giving you a helpful starting point to better understand how much home you can afford. It gives you a clearer picture as you move forward with your home search!"
    />),
    3: (<RenderHtmlStructure
        text="We’re here to help you set realistic expectations and give you a clearer picture of what to expect—both in terms of the money you'll need upfront and what you'll need to budget for each month. Just click on the bouncing balloons to get started!"
    />),
    4: (<RenderHtmlStructure
        text="3D Model from: pou (https://sketchfab.com/abipup)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/animal-crossing-atlas-diorama-3-59158e7e8dba4648a61aa9d54146300b
Title: Animal Crossing Atlas Diorama <3"
    />),
}

const Intro = ({ currentStage }) => {
    return renderContent[currentStage] || null;
}

export default Intro