import React, { useEffect } from "react";

export default function TestingTesting() {

    useEffect(() => {
        console.log("Testing logs with this component")
    })
    return (
        <li className="list-group-item">Testing render with this component</li>
    )
}