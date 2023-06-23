import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { useWidth } from "../Custom Hooks/Width";
import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import { MdFeedback } from "react-icons/md";
import { GrAddCircle } from "react-icons/gr";
import "../CSS/Feedback.css";
import FeedbackComponent from "../Components/FeedbackComponent";
import AddNew from "../Components/AddNew";

const Feedback = () => {
  const width = useWidth();
  const [active, setActive] = useState("feedback");
  return (
    <div>
      <Navbar />
      <Box>
        <Flex
          alignItems={"center"}
          justifyContent={"space-around"}
          w={width < 1000 ? "95%" : "70%"}
          m="auto"
          mt="20px"
          textAlign={"center"}
          gap="10px"
          flexWrap={"wrap"}
        >
          <Heading
            size={"md"}
            fontWeight={"300"}
            className={
              active === "feedback"
                ? "feedback-nav feedback-nav-active"
                : "feedback-nav"
            }
            onClick={() => setActive("feedback")}
          >
            <Flex alignItems={"center"} gap="5px">
              <MdFeedback />
              <Text fontWeight={"500"}>Feedback</Text>
            </Flex>
          </Heading>
          <Heading
            size={"md"}
            fontWeight={"300"}
            className={
              active === "new"
                ? "feedback-nav feedback-nav-active"
                : "feedback-nav"
            }
            onClick={() => setActive("new")}
          >
            <Flex alignItems={"center"} gap="5px">
              <GrAddCircle
                size={"20px"}
                color={active === "new" ? "black" : "gray"}
              />
              <Text fontWeight={"500"}>Add New</Text>
            </Flex>
          </Heading>
        </Flex>
        <Divider w={width < 1000 ? "95%" : "70%"} m="auto" />
        {active === "feedback" ? <FeedbackComponent /> : <AddNew />}
      </Box>
    </div>
  );
};

export default Feedback;
