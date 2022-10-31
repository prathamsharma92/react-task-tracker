// state is immutable
// import {useState} from 'react'

import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle}) => {
  // const [tasks, setTasks] = useState(
  //   [
  //     {
  //       id: 1,
  //       text: 'Doctors Appointment 1',
  //       day: '1th Feb',
  //       reminder: true
  //     },
  //     {
  //       id: 2,
  //       text: 'Doctors Appointment 2',
  //       day: '2th Feb',
  //       reminder: true
  //     },
  //     {
  //       id: 3,
  //       text: 'Doctors Appointment 3',
  //       day: '3th Feb',
  //       reminder: false
  //     },
  //     {
  //       id: 4,
  //       text: 'Doctors Appointment 4',
  //       day: '4th Feb',
  //       reminder: true
  //     },
  //     {
  //       id: 5,
  //       text: 'Doctors Appointment 5',
  //       day: '5th Feb',
  //       reminder: false
  //     }
  //   ]
  // )
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
      ))}
    </>
  )
}

export default Tasks