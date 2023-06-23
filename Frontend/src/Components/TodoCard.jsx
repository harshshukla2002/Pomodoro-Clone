import {
  Box,
  Button,
  Flex,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BiCheck, BiEdit } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

const TodoCard = ({ HandleEdit, HandleDelete, todo }) => {
  const [edit, setEdit] = useState(false);
  const [newData, setNewData] = useState(todo);

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setNewData({ ...newData, [name]: value });
  };

  return (
    <div>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        textAlign={"center"}
        w="75%"
        m="auto"
        border={"1px solid gray"}
        p="10px"
        gap="10px"
      >
        {edit ? (
          <>
            <Input
              name="title"
              value={newData.title}
              onChange={HandleChange}
              focusBorderColor="black"
            />
            <Input
              name="description"
              value={newData.description}
              onChange={HandleChange}
              focusBorderColor="black"
            />
            <Button
              variant={"none"}
              onClick={() => {
                HandleEdit(newData, newData._id);
                setEdit(false);
              }}
            >
              <BiCheck size={"70px"} />
            </Button>
          </>
        ) : (
          <>
            <Box>{newData.title}</Box>
            <Box>{newData.description}</Box>
            <Box>{newData.status ? "Completed" : "Pending"}</Box>
            <Popover placement="right">
              <PopoverTrigger>
                <Button variant={"none"}>
                  <BsThreeDots />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  <Stack direction={"column"}>
                    <Flex
                      alignItems={"center"}
                      gap="10px"
                      cursor={"pointer"}
                      onClick={() =>
                        HandleEdit(
                          { status: todo.status ? false : true },
                          todo._id
                        )
                      }
                    >
                      {todo.status ? (
                        <RxCross1 size={"25px"} />
                      ) : (
                        <BiCheck size={"25px"} />
                      )}
                      Mark as {todo.status ? "pending" : "done"}
                    </Flex>
                    <Flex
                      alignItems={"center"}
                      gap="10px"
                      cursor={"pointer"}
                      onClick={() => setEdit(true)}
                    >
                      <BiEdit size={"20px"} />
                      Edit
                    </Flex>
                    <Flex
                      alignItems={"center"}
                      gap="10px"
                      cursor={"pointer"}
                      onClick={() => HandleDelete(todo._id)}
                    >
                      <MdDelete size={"20px"} />
                      Delete
                    </Flex>
                  </Stack>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </>
        )}
      </Flex>
    </div>
  );
};

export default TodoCard;
