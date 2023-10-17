
import { 
  Box, 
  Button, 
  Flex, 
  Icon, 
  Input, 
  Text
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { MdDelete, MdModeEditOutline } from 'react-icons/md';

import './App.css'

interface Task{
  id: string,
  text: string,
}

function App() {

  const [tasks, setTask] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>();

  async function getTasks(): Promise<void> {
    try{
      const res = await axios.get<Task[]>('http://localhost:3000/task/read');
      setTask(res.data);
      setNewTask("");
    }catch(error){
      console.log(error);
    }
  }

  async function createTask( event : React.FormEvent<HTMLFormElement> ) : Promise<void> {
    event.preventDefault();
    try{
      await axios.post<Task[]>('http://localhost:3000/task/create', {
        text: newTask,
      });
      getTasks();
    }catch(error){
      console.log(error);
    }
  }

  async function updateTask(id: string) : Promise<void> {
    const res = prompt("Digite o novo texto da task: ");

    if(!res){
      return alert("Input não pode ser vazio.")
    }

    try{
      await axios.put('http://localhost:3000/task/update', {
        id: id,
        text: res,
      })
      getTasks();
    }catch(error){
      console.log(error);
    }
  }

  async function deleteTask(id: string): Promise<void>{
    try{
      await axios.delete('http://localhost:3000/task/delete', { data: { id } });
      getTasks();
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    getTasks();
  }, [])

  return (
    <>
      <Box>
        {tasks.map(( value: Task, index: number ) => {
          return(
            <Box key={index} bgColor='green.200' m={30} p={30} borderRadius={20}>
              <Text fontSize={20}>{value.text}</Text>
              <Flex justify='space-evenly'>
                <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                  e.preventDefault();
                  updateTask(value.id);
                  }}>
                  <Button type='submit'>
                    <MdModeEditOutline/>
                  </Button>
                </form>
                <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                  e.preventDefault();
                  deleteTask(value.id);
                  }}>
                  <Button type='submit'>
                    <Icon as={MdDelete} />
                  </Button>
                </form>
              </Flex>
            </Box>
          )
        })}
      </Box>
      <Box>
        <form onSubmit={createTask}>
          <Input value={newTask} type='text' onChange={(e : React.ChangeEvent<HTMLInputElement>) => { setNewTask( e.target.value ) }}/>
          <Button type='submit' mt={5} h={50} w={60}>Criar</Button>
        </form>
      </Box>
    </>
  )
}

export default App
