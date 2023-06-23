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
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";

const InitialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [login, setLogin] = useState(InitialState);
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate("");

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  const HandleSubmit = async () => {
    if (login.email === "") {
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
    } else if (login.password === "") {
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
        const res = await axios.post(
          "https://clear-gaiters-hen.cyclic.app/users/login",
          login
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
              Login Success
            </Flex>
          ),
        });
        localStorage.setItem("token", JSON.stringify(res.data.token));
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setLogin(InitialState);
        setLoading(false);
        navigate("/");
      } catch (err) {
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
              <BiErrorCircle size={"25px"} />
              {err.response.data.msg}
            </Flex>
          ),
        });
        setLoading(false);
      }
    }
  };

  return (
    <div>
      <Navbar />
      <Box w="70%" m="auto" mt="20px">
        <Heading textAlign={"center"}>Login</Heading>
        <Box
          w="40%"
          m="auto"
          mt="20px"
          border={"2px solid teal"}
          p="10px"
          borderRadius={"5px"}
        >
          <Flex alignItems={"center"} gap="10px" m="10px">
            <label>Email:</label>
            <Input
              type="email"
              variant="filled"
              name="email"
              value={login.email}
              onChange={HandleChange}
            />
          </Flex>
          <Flex alignItems={"center"} gap="10px" m="10px">
            <label>Password:</label>
            <Input
              type="password"
              variant="filled"
              name="password"
              value={login.password}
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
            {loading ? <Spinner /> : "Login"}
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Login;
