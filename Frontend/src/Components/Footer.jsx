import { Badge, Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsDot, BsFacebook, BsPinterest } from "react-icons/bs";
import { FaDiscord, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Box w="70%" m="auto">
        <Flex alignItems={"center"} gap="20px" flexWrap={"wrap"}>
          <Image src="https://pomodoro-tracker.com/static/images/macappstore.svg" />
          <Image src="https://pomodoro-tracker.com/static/images/winstore.svg" />
        </Flex>
        <Box textAlign={"center"} m="15px">
          <Badge p="3px">
            <Flex alignItems={"center"} gap="3px" m="0px 10px">
              <AiOutlineTwitter size={"18px"} color="skyblue" /> Tweet
            </Flex>
          </Badge>
          <Badge p="3px" m="0px 10px">
            <Flex alignItems={"center"} gap="5px">
              <BsFacebook size={"18px"} color="blue" /> Share {"     "} 1693
            </Flex>
          </Badge>
          <Badge p="3px" m="0px 10px">
            <Flex alignItems={"center"} gap="5px">
              <BsPinterest size={"18px"} color="red" />
              Pin
            </Flex>
          </Badge>
          <Badge p="3px" m="0px 10px">
            <Flex alignItems={"center"} gap="5px">
              <FaDiscord size={"18px"} color="green" />
              Share
            </Flex>
          </Badge>
          <Badge p="3px" m="0px 10px">
            <Flex alignItems={"center"} gap="5px">
              <FaTelegramPlane size={"18px"} color="skyblue" />
              Send
            </Flex>
          </Badge>
          <Badge p="3px" m="0px 10px">
            <Flex alignItems={"center"} gap="5px">
              <FaWhatsapp size={"18px"} color="green" />
              Send
            </Flex>
          </Badge>
        </Box>
        <Flex
          color={"#878ff2"}
          alignItems={"center"}
          gap="5px"
          textAlign={"center"}
          fontSize={"18px"}
          flexWrap={"wrap"}
        >
          <Text>Version 22.0.4</Text>
          <BsDot />
          <Text>Privacy Policy</Text>
          <BsDot />
          <Text>Terms and Conditions</Text>
          <BsDot />
          <Text>Slack Community</Text>
          <BsDot />
          <Text>
            harsh@mail.com <span style={{ color: "black" }}>2018</span>
          </Text>
        </Flex>
        <Text textAlign={"center"} fontSize={"16px"} m="10px">
          Pomodoro-Tracker is not related to the Pomodoro Technique™/Pomodoro™’s
          trademark holder Cirillo Company and respects its trademarks. Pomodoro
          Technique® and Pomodoro® are registered trademarks of Francesco
          Cirillo. All logos and marks contained herein are the property of
          their respective owners.
        </Text>
      </Box>
    </div>
  );
};

export default Footer;
