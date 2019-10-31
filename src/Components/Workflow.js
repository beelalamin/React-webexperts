import React from 'react';
import hero from '../images/workflow.svg'
import Circle from './Circle'

function Workflow() {
    return (
        <>
         <div className="workflow-heading">
                <h2>Our Workflow</h2>
                <p>I always follow professional Workflow and provide you best service with resealable costs.</p>
                </div>
        <div className="work-flow"> 
            <div className="workflow-hero">
                <img src={hero} alt="" width="100%"/>
            </div>
                <div className="workflow-comps">
 
            <Circle fill="#3D37F1" num="01" h4="Your brief" p="I always  follow professional Workflow and provide"/>
            <Circle fill="#FFBA3F" num='02' h4="Concept Design" p="I always follow professional Workflow and provide"/>
            <Circle fill="#37F1BE" num='03' h4="Review " p="I always follow professional Workflow and provide"/>
            <Circle fill="#F13D37" num='04' h4="Research" p="I always follow professional Workflow and provide"/>
            <Circle fill="#9997DF" num='05' h4="Revision" p="I always follow professional Workflow and provide"/>
            <Circle fill="#E66E6E" num='06' h4="Finalize" p="I always follow professional Workflow and provide"/>
            




            <Circle fill="#3D37F1" num="01" h4="Your brief" p="I always  follow professional Workflow and provide"/>
            <Circle fill="#FFBA3F" num='02' h4="Concept Design" p="I always follow professional Workflow and provide"/>
            <Circle fill="#37F1BE" num='03' h4="Review " p="I always follow professional Workflow and provide"/>
            <Circle fill="#F13D37" num='04' h4="Research" p="I always follow professional Workflow and provide"/>
            <Circle fill="#9997DF" num='05' h4="Revision" p="I always follow professional Workflow and provide"/>
            <Circle fill="#E66E6E" num='06' h4="Finalize" p="I always follow professional Workflow and provide"/>

            
            
            </div>

        </div>
        </>
    )
}

export default Workflow
