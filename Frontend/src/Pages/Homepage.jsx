import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Components/Navbar";
import {
  AbsoluteCenter,
  Box,
  Button,
  Divider,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useWidth } from "../Custom Hooks/Width";
import { MdSettings } from "react-icons/md";
import { AiFillForward } from "react-icons/ai";
import TodoApp from "../Components/TodoApp";
import Carousel from "../Components/Carosel";

const Homepage = () => {
  const width = useWidth();
  const [timer, setTimer] = useState(true);
  const [workTime, setWorkTime] = useState(30);
  const [breakTime, setBreakTime] = useState(5);
  const [Workseconds, setWrokSeconds] = useState(60);
  const [breakseconds, setBreakSeconds] = useState(60);
  const ref = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const StartTimer = () => {
    clearInterval(ref.current);
    ref.current = setInterval(() => {
      if (timer) setWrokSeconds((prev) => (prev === 0 ? 59 : prev - 1));
      else setBreakSeconds((prev) => (prev === 0 ? 59 : prev - 1));
    }, 1000);
  };

  useEffect(() => {
    if (Workseconds === 0) {
      setWorkTime((prev) => (prev === 0 ? 0 : prev - 1));
    } else if (breakseconds === 0) {
      setBreakTime((prev) => (prev === 0 ? 0 : prev - 1));
    }
  }, [Workseconds, breakseconds]);

  useEffect(() => {
    clearInterval(ref.current);
  }, [timer]);

  const StopTimer = () => {
    clearInterval(ref.current);
  };

  return (
    <div>
      <Navbar />
      <Box
        bg={timer ? "#e85d04" : "#aacc00"}
        w={width < 1000 ? "95%" : "70%"}
        m="auto"
        mt="10px"
        p="5px"
        borderRadius={"10px"}
        transition={"all"}
      >
        <Flex
          fontSize={"20px"}
          color="white"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <MdSettings size={"35px"} cursor={"pointer"} onClick={onOpen} />
          <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Settings</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Flex alignItems={"center"} m="5px 0px">
                  <Box w="20%">Work Time</Box>{" "}
                  <Input
                    value={workTime}
                    onChange={(e) => setWorkTime(e.target.value)}
                  />
                </Flex>
                <Flex alignItems={"center"} m="5px 0px">
                  <Box w="20%">Break Time</Box>{" "}
                  <Input
                    value={breakTime}
                    onChange={(e) => setBreakTime(e.target.value)}
                  />
                </Flex>
              </ModalBody>
            </ModalContent>
          </Modal>
          <Flex alignItems={"center"} gap="2px">
            {timer ? "Pomodoro" : "Take A Break"}
            <AiFillForward
              size={"24px"}
              cursor={"pointer"}
              onClick={() => setTimer(!timer)}
            />
          </Flex>
        </Flex>
        <Box textAlign={"center"} fontSize={"80px"} color={"white"}>
          {timer ? (
            <Box>
              {Workseconds === 60 ? workTime : workTime - 1} :{" "}
              {Workseconds === 60
                ? "00"
                : Workseconds < 10
                ? `0${Workseconds}`
                : Workseconds}
            </Box>
          ) : (
            <Box>
              {breakseconds === 60 ? breakTime : breakTime - 1} :{" "}
              {breakseconds === 60
                ? "00"
                : breakseconds < 10
                ? `0${breakseconds}`
                : breakseconds}
            </Box>
          )}

          <Button
            variant={"none"}
            border={"1px solid white"}
            borderRadius={"2px"}
            p="3px 80px"
            m="0px 25px"
            onClick={StartTimer}
          >
            START
          </Button>
          <Button
            variant={"none"}
            border={"1px solid white"}
            borderRadius={"2px"}
            p="3px 80px"
            m="0px 25px"
            onClick={StopTimer}
            disabled={ref.current === null}
          >
            STOP
          </Button>
        </Box>
      </Box>
      <Box
        position="relative"
        padding="10"
        w={width < 1000 ? "95%" : "80%"}
        m="auto"
        fontSize={"18px"}
        fontWeight={"400"}
      >
        <Divider />
        <AbsoluteCenter bg="white" px="2">
          TODO
        </AbsoluteCenter>
      </Box>
      <TodoApp />
      <Box
        position="relative"
        padding="10"
        w={width < 1000 ? "95%" : "80%"}
        m="auto"
      >
        <Divider />
        <AbsoluteCenter bg="white" px="2"></AbsoluteCenter>
      </Box>
      <Carousel />
    </div>
  );
};

export default Homepage;
