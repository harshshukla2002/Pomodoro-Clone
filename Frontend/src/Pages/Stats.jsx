import Navbar from "../Components/Navbar";
import React, { useEffect, useRef, useState } from "react";
import { Box, Divider, Flex, Heading, Switch } from "@chakra-ui/react";
import { BsFillPersonFill } from "react-icons/bs";
import { MdGroups } from "react-icons/md";
import "../CSS/Stats.css";
import Globalstats from "../Components/GlobalStats";
import { useWidth } from "../Custom Hooks/Width";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import PersonalStats from "../Components/PersonalStats";
import TodoApp from "../Components/TodoApp";

const Stats = () => {
  const [active, setActive] = useState("global");
  const [loading, setLoading] = useState(false);
  const ref = useRef();
  const [date, setDate] = useState("today");
  const width = useWidth();

  useEffect(() => {
    setLoading(true);
    ref.current = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => {
      clearTimeout(ref.current);
    };
  }, [active, date]);
  return (
    <div>
      <Navbar />
      <Box p="10px">
        {/* navbar for stats */}
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
            className={
              active === "personal"
                ? "statspage-nav statspage-nav-active"
                : "statspage-nav"
            }
            onClick={() => setActive("personal")}
          >
            <Flex alignItems={"center"} gap="5px">
              <BsFillPersonFill />
              Personal
            </Flex>
          </Heading>
          <Heading
            size={"md"}
            className={
              active === "global"
                ? "statspage-nav statspage-nav-active"
                : "statspage-nav"
            }
            onClick={() => setActive("global")}
          >
            <Flex alignItems={"center"} gap="5px">
              <MdGroups
                size={"25px"}
                color={active === "global" ? "black" : "gray"}
              />
              Global
            </Flex>
          </Heading>
        </Flex>
        <Divider w={width < 1000 ? "95%" : "70%"} m="auto" />
        <Box w={width < 1000 ? "95%" : "80%"} m="auto">
          {active === "personal" ? (
            // personal section
            <>
              {loading ? (
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
              ) : (
                <>
                  <PersonalStats />
                  <TodoApp />
                </>
              )}
            </>
          ) : (
            //global section
            <>
              <Heading
                m="20px"
                size={"md"}
                textAlign={"right"}
                fontFamily={"Inter, sans-serif"}
              >
                Join the global rating{" "}
                <Switch colorScheme="green" size="lg" checked={true} />
              </Heading>
              <Flex
                justifyContent={"space-between"}
                gap="10px"
                flexWrap={"wrap"}
              >
                <Box>
                  <Flex>
                    <Box
                      className={
                        date === "today"
                          ? "date-box date-box-active"
                          : "date-box"
                      }
                      onClick={() => setDate("today")}
                    >
                      TODAY
                    </Box>
                    <Box
                      className={
                        date === "week"
                          ? "date-box date-box-active"
                          : "date-box"
                      }
                      onClick={() => setDate("week")}
                    >
                      WEEK
                    </Box>
                    <Box
                      className={
                        date === "month"
                          ? "date-box date-box-active"
                          : "date-box"
                      }
                      onClick={() => setDate("month")}
                    >
                      MONTH
                    </Box>
                  </Flex>
                </Box>
                <Flex
                  alignItems={"center"}
                  border={"1px solid gray"}
                  cursor={"pointer"}
                >
                  <Box>
                    <BiChevronLeft size={25} />
                  </Box>
                  <Box
                    fontSize={"14px"}
                    borderLeft={"2px solid gray"}
                    borderRight={"2px solid gray"}
                    p="0px 7px"
                  >
                    Page 1/10
                  </Box>
                  <Box>
                    <BiChevronRight size={25} />
                  </Box>
                </Flex>
              </Flex>
              <Box>
                {loading ? (
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
                ) : (
                  <Globalstats />
                )}
              </Box>
              <Flex justifyContent={"space-between"}>
                <Box></Box>
                <Flex
                  alignItems={"center"}
                  border={"1px solid gray"}
                  textAlign={"right"}
                  mt="30px"
                  cursor={"pointer"}
                >
                  <Box>
                    <BiChevronLeft size={25} />
                  </Box>
                  <Box
                    fontSize={"14px"}
                    borderLeft={"2px solid gray"}
                    borderRight={"2px solid gray"}
                    p="0px 7px"
                  >
                    Page 1/10
                  </Box>
                  <Box>
                    <BiChevronRight size={25} />
                  </Box>
                </Flex>
              </Flex>
            </>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default Stats;
