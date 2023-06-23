import { Box, Button, Flex, Input, Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  GET_TODO_ERROR,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS,
} from "../Redux/Todo/actiontype";
import { GetTodo } from "../Redux/Todo/action";
import { BiCheck, BiErrorCircle, BiNotepad } from "react-icons/bi";
import axios from "axios";
import TodoCard from "./TodoCard";

const InitialState = {
  title: "",
  description: "",
};

const TodoApp = () => {
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const { todos, isLoading } = useSelector((store) => store.todoReducer);
  const dispatch = useDispatch();
  const [todoForm, setTodoForm] = useState(InitialState);
  const toast = useToast();
  const token = JSON.parse(localStorage.getItem("token")) || "";

  const GetTodos = async () => {
    if (token) {
      dispatch({ type: GET_TODO_REQUEST });
      try {
        let res = await GetTodo(token, user._id);
        dispatch({ type: GET_TODO_SUCCESS, payload: res.data.todos });
      } catch (error) {
        dispatch({ type: GET_TODO_ERROR });
        console.log(error.response.data);
      }
    }
  };

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setTodoForm({ ...todoForm, [name]: value });
  };

  const HandleEdit = async (newdata, id) => {
    console.log(newdata, id);
    try {
      await axios({
        method: "patch",
        url: `https://clear-gaiters-hen.cyclic.app/todos/update/${id}`,
        headers: {
          authorization: `bearer ${token}`,
        },
        data: newdata,
      });
      toast({
        position: "top-right",
        duration: "2000",
        render: () => (
          <Flex
            bg="#212529"
            color={"green"}
            borderRadius={"5px"}
            p="5px"
            alignItems={"center"}
            fontSize={"20px"}
            gap="5px"
          >
            <BiCheck size={"25px"} />
            Todo Updated
          </Flex>
        ),
      });
      GetTodos();
    } catch (error) {
      console.log(error);
      toast({
        position: "top-right",
        duration: "2000",
        render: () => (
          <Flex
            bg="#212529"
            color={"red"}
            borderRadius={"5px"}
            p="5px"
            alignItems={"center"}
            fontSize={"20px"}
            gap="5px"
          >
            <BiErrorCircle size={"25px"} />
            Something Went Wrong
          </Flex>
        ),
      });
    }
  };

  const HandleDelete = async (id) => {
    try {
      await axios({
        method: "delete",
        url: `https://clear-gaiters-hen.cyclic.app/todos/delete/${id}`,
        headers: {
          authorization: `bearer ${token}`,
        },
      });
      toast({
        position: "top-right",
        duration: "2000",
        render: () => (
          <Flex
            bg="#212529"
            color={"green"}
            borderRadius={"5px"}
            p="5px"
            alignItems={"center"}
            fontSize={"20px"}
            gap="5px"
          >
            <BiCheck size={"25px"} />
            Todo Deleted
          </Flex>
        ),
      });
      GetTodos();
    } catch (error) {
      console.log(error);
      toast({
        position: "top-right",
        duration: "2000",
        render: () => (
          <Flex
            bg="#212529"
            color={"red"}
            borderRadius={"5px"}
            p="5px"
            alignItems={"center"}
            fontSize={"20px"}
            gap="5px"
          >
            <BiErrorCircle size={"25px"} />
            Something Went Wrong
          </Flex>
        ),
      });
    }
  };

  const HandlePost = async () => {
    if (!user.email) {
      toast({
        position: "top-right",
        duration: "2000",
        render: () => (
          <Flex
            bg="#212529"
            color={"red"}
            borderRadius={"5px"}
            p="5px"
            alignItems={"center"}
            fontSize={"20px"}
            gap="5px"
          >
            <BiErrorCircle size={"25px"} />
            Can't Add Please Login First
          </Flex>
        ),
      });
      return;
    } else {
      if (todoForm.title === "") {
        toast({
          position: "top-right",
          duration: "2000",
          render: () => (
            <Flex
              bg="#212529"
              color={"red"}
              borderRadius={"5px"}
              p="5px"
              alignItems={"center"}
              fontSize={"20px"}
              gap="5px"
            >
              <BiErrorCircle size={"25px"} />
              title is empty
            </Flex>
          ),
        });
        return;
      }

      if (todoForm.description === "") {
        toast({
          position: "top-right",
          duration: "2000",
          render: () => (
            <Flex
              bg="#212529"
              color={"red"}
              borderRadius={"5px"}
              p="5px"
              alignItems={"center"}
              fontSize={"20px"}
              gap="5px"
            >
              <BiErrorCircle size={"25px"} />
              description is empty
            </Flex>
          ),
        });
        return;
      }
      try {
        todoForm.userId = user._id;

        await axios({
          method: "post",
          url: "https://clear-gaiters-hen.cyclic.app/todos/create",
          headers: {
            authorization: `bearer ${token}`,
          },
          data: todoForm,
        });
        toast({
          position: "top-right",
          duration: "2000",
          render: () => (
            <Flex
              bg="#212529"
              color={"green"}
              borderRadius={"5px"}
              p="5px"
              alignItems={"center"}
              fontSize={"20px"}
              gap="5px"
            >
              <BiCheck size={"25px"} />
              Todo Posted
            </Flex>
          ),
        });
        setTodoForm(InitialState);
        GetTodos();
      } catch (error) {
        console.log(error);
        toast({
          position: "top-right",
          duration: "2000",
          render: () => (
            <Flex
              bg="#212529"
              color={"red"}
              borderRadius={"5px"}
              p="5px"
              alignItems={"center"}
              fontSize={"20px"}
              gap="5px"
            >
              <BiErrorCircle size={"25px"} />
              Something Went Wrong
            </Flex>
          ),
        });
      }
    }
  };

  useEffect(() => {
    GetTodos();
  }, []);

  return (
    <div>
      <Box w="70%" m="auto" textAlign={"center"} mt="20px" mb="20px">
        <Flex>
          <Input
            focusBorderColor="black"
            w="20%"
            m="0px 10px"
            borderRadius={"3px"}
            placeholder="Category"
            name="title"
            value={todoForm.title}
            onChange={HandleChange}
          />
          <Input
            focusBorderColor="black"
            m="0px 10px"
            borderRadius={"3px"}
            placeholder="Short Description"
            name="description"
            value={todoForm.description}
            onChange={HandleChange}
          />
          <Button
            variant={"none"}
            size={"20px"}
            border="2px solid black"
            p="3px 10px"
            onClick={HandlePost}
          >
            <AiOutlinePlus size={"25px"} />
          </Button>
        </Flex>
        {todos.length > 0 ? (
          isLoading ? (
            <>
              <div className="loader">
                {/* loading animation */}
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
                <div className="bar4"></div>
                <div className="bar5"></div>
                <div className="bar6"></div>
                <div className="bar7"></div>
                <div className="bar8"></div>
                <div className="bar9"></div>
                <div className="bar10"></div>
                <div className="bar11"></div>
                <div className="bar12"></div>
              </div>
            </>
          ) : (
            <>
              <Box m="20px">
                {todos.map((todo) => {
                  return (
                    <TodoCard
                      key={todo._id}
                      todo={todo}
                      HandleEdit={HandleEdit}
                      HandleDelete={HandleDelete}
                    />
                  );
                })}
              </Box>
            </>
          )
        ) : (
          <Box m="10px" mt="20px">
            <Flex alignItems={"center"} fontSize={"20px"} color={"#878ff2"}>
              <BiNotepad />
              <Text>TODO list is empty.</Text>
            </Flex>
            <Text textAlign={"left"}>
              Try to add some tasks use the form above.
            </Text>
          </Box>
        )}
      </Box>
    </div>
  );
};

export default TodoApp;
