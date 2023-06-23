import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { BiCheck, BiErrorCircle } from "react-icons/bi";

const InitialState = {
  name: "",
  title: "",
  body: "",
};

const AddNew = () => {
  const [feedback, setFeedback] = useState(InitialState);
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const HandleSubmit = () => {
    if (feedback.name === "") {
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
            name is empty
          </Flex>
        ),
      });
      return;
    } else if (feedback.title === "") {
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
    } else if (feedback.body === "") {
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
            body is empty
          </Flex>
        ),
      });
      return;
    } else {
      setLoading(true);
      axios
        .post("https://clear-gaiters-hen.cyclic.app/feedback/add", feedback)
        .then(() => {
          toast({
            position: "top-right",
            duration: "2000",
            render: () => (
              <Flex
                bg="#212529"
                color={"white"}
                borderRadius={"5px"}
                p="5px"
                alignItems={"center"}
                fontSize={"20px"}
                gap="5px"
              >
                <BiCheck size={"25px"} />
                Thanks for giving feedback
              </Flex>
            ),
          });
          setFeedback(InitialState);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  };

  return (
    <div>
      <Box w="70%" m="auto" mt="20px">
        <Heading textAlign={"center"}>Your Feedback is valuable to us!</Heading>
        <Box
          w="40%"
          m="auto"
          mt="20px"
          border={"2px solid teal"}
          p="10px"
          borderRadius={"5px"}
        >
          <Flex alignItems={"center"} gap="10px" m="10px">
            <label>Name:</label>
            <Input
              variant="filled"
              name="name"
              value={feedback.name}
              onChange={HandleChange}
            />
          </Flex>
          <Flex alignItems={"center"} gap="10px" m="10px">
            <label>Title:</label>
            <Input
              variant="filled"
              name="title"
              value={feedback.title}
              onChange={HandleChange}
            />
          </Flex>
          <Flex alignItems={"center"} gap="10px" m="10px">
            <label>Body:</label>
            <Input
              variant="filled"
              name="body"
              value={feedback.body}
              onChange={HandleChange}
            />
          </Flex>
          <Button
            variant={"none"}
            w="100%"
            m="auto"
            border={"1px solid gray"}
            borderRadius={"2px"}
            onClick={HandleSubmit}
          >
            {loading ? <Spinner /> : "Submit"}
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default AddNew;
