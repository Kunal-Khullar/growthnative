import React from 'react'
import './student.css'
import { MqttClient } from 'mqtt'
const Student = () => {
  return (
    <div className="studentForm">
        <input type="text" className="roll" placeholder="Enter Roll no."></input>
        <input type="file" placeholder="Select Photo"></input>

        <textarea placeholder="message"></textarea>
    </div>
  )
}

export default Student