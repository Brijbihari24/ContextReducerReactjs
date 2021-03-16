import React, { useState, useContext } from "react";
import {
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
} from "reactstrap";

import { v4 } from "uuid";
import { TodoContext } from "../Context/todoContext";
import { ADD_TODO } from "../Context/action.types";

const TodoForm = () => {
  const [todoString, setTodoString] = useState("");
  const{dispatch} = useContext(TodoContext)

  const handleSubmit = e =>{
    e.preventDefault();

    if(todoString === "")
    return alert("Please add your todo task")

    const todo ={
      todoString,
      id : v4()
    }

    dispatch({
      type:ADD_TODO,
      payload: todo
    });
  }
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Your next todo"
            value={todoString}
            onChange={e => setTodoString(e.target.value)}
          />
          <InputGroupAddon addonType="prepend">
            <Button
              color="warning"
              //TODO: onclick
              onSubmit={handleSubmit}
            >
              Add
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default TodoForm;
