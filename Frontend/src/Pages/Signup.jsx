import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Spinner,
  Stack,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { BiCheck, BiErrorCircle } from "react-icons/bi";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";

const InitialState = {
  name: "",
  email: "",
  password: "",
  gender: "",
};

const Signup = () => {
  const [register, setRegister] = useState(InitialState);
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate("");

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };

  const HandleSubmit = async () => {
    if (register.name === "") {
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
    } else if (register.email === "") {
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
            email is empty
          </Flex>
        ),
      });
      return;
    } else if (register.gender === "") {
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
            gender is empty
          </Flex>
        ),
      });
      return;
    } else if (register.password === "") {
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
            password is empty
          </Flex>
        ),
      });
      return;
    } else {
      setLoading(true);
      try {
        await axios.post(
          "https://clear-gaiters-hen.cyclic.app/users/register",
          register
        );
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
              User Registered
            </Flex>
          ),
        });

        setRegister(InitialState);
        setLoading(false);
        navigate("/login");
      } catch (err) {
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
              {err.response.data.msg || "something went wrong"}
            </Flex>
          ),
        });
        setLoading(false);
        console.log(err);
      }
    }
  };

  return (
    <div>
      <Navbar />
      <Box w="70%" m="auto" mt="20px">
        <Heading textAlign={"center"}>Signup</Heading>
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
              value={register.name}
              onChange={HandleChange}
            />
          </Flex>
          <Flex alignItems={"center"} gap="10px" m="10px">
            <label>Email:</label>
            <Input
              type="email"
              variant="filled"
              name="email"
              value={register.email}
              onChange={HandleChange}
            />
          </Flex>
          <Flex alignItems={"center"} gap="10px" m="10px">
            <label>Gender:</label>
            <RadioGroup>
              <Stack direction="row">
                <Radio name="gender" onChange={HandleChange} value="male">
                  Male
                </Radio>
                <Radio name="gender" onChange={HandleChange} value="female">
                  Female
                </Radio>
              </Stack>
            </RadioGroup>
          </Flex>
          <Flex alignItems={"center"} gap="10px" m="10px">
            <label>Password:</label>
            <Input
              type="password"
              variant="filled"
              name="password"
              value={register.password}
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
            {loading ? <Spinner /> : "Sign up"}
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Signup;
