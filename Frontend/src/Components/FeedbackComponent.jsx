import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsPerson } from "react-icons/bs";
import "../CSS/Feedback.css";

const FeedbackComponent = () => {
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(false);

  const GetFeedback = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://clear-gaiters-hen.cyclic.app/feedback"
      );
      setFeedback(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    GetFeedback();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loader">
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
      ) : (
        <SimpleGrid
          columns={[1, 2, 3]}
          w="70%"
          m="auto"
          mt="20px"
          gap="10px"
          p="10px"
        >
          {feedback?.map((item) => {
            return (
              <Flex
                gap="10px"
                boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                p="5px"
                borderRadius={"5px"}
                key={item._id}
              >
                <Box>
                  <BsPerson size={"30px"} />
                </Box>
                <Box>
                  <Heading size={"md"}>{item.name}</Heading>
                  <Box m="5px">
                    <Text m="2px" fontWeight={"500"}>
                      {item.title}
                    </Text>
                    <Text m="2px">{item.body}</Text>
                  </Box>
                </Box>
              </Flex>
            );
          })}
        </SimpleGrid>
      )}
    </div>
  );
};

export default FeedbackComponent;
