import { useEffect, useState } from 'react'
import axios from 'axios';

import './App.css'

interface Task{
  text: string,
}

function App() {

  const [tasks, setTask] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>();

  async function getTasks(): Promise<void> {
    try{
      const res = await axios.get<Task[]>('http://localhost:3000/task/read');
      setTask(res.data);
    }catch(error){
      console.log(error);
    }
  }

  async function createTask(e: any) : Promise<void> {
    e.preventDefault();
    try{
      await axios.post<Task[]>('http://localhost:3000/task/create', {
        text: newTask,
      });
      getTasks();
    }catch(error){
      console.log(error);
    }
  }

  async function updateTask

  useEffect(() => {
    getTasks();
  }, [])

  return (
    <>
      <div className='read'>
        {tasks.map((value: Task, index: number) => {
          return(
            <div key={index}>
              <h1>{value.text}</h1>
              <form>
                <input type='text' onChange={} placeholder='atualizar'/>
              </form>
            </div>
          )
        })}
      </div>
      <div className='create'>
        <form onSubmit={createTask}>
          <input type='text' onChange={(e) => {setNewTask(e.target.value)}}/>
          <button type='submit'>Criar</button>
        </form>
      </div>
    </>
  )
}

export default App
