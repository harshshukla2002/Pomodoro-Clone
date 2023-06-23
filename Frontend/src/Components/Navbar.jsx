import React from "react";
import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useToast,
} from "@chakra-ui/react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  BsFillCheckCircleFill,
  BsPersonCheckFill,
  BsPersonCircle,
} from "react-icons/bs";
import {
  BiCheck,
  BiChevronDown,
  BiChevronUp,
  BiErrorCircle,
} from "react-icons/bi";
import { VscGraph } from "react-icons/vsc";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { MdLogin, MdLogout } from "react-icons/md";
import "../CSS/Navbar.css";
import { useWidth } from "../Custom Hooks/Width";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import axios from "axios";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const width = useWidth();
  const user = JSON.parse(localStorage.getItem("user")) || {};
  const token = JSON.parse(localStorage.getItem("token")) || "";
  const toast = useToast();

  const Logout = () => {
    let headers = { authorization: `bearer ${token}` };

    axios
      .get("https://clear-gaiters-hen.cyclic.app/users/logout", { headers })
      .then((res) => {
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
              {res.data.msg}
            </Flex>
          ),
        });
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
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
              Some Thing Went Wrong
            </Flex>
          ),
        });
      });
  };

  return (
    <div>
      {width < 700 ? (
        <Flex alignItems={"center"} gap="50px" padding={"10px"}>
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton isActive={isOpen} as={Button} variant={"none"}>
                  {isOpen ? <GrClose /> : <GiHamburgerMenu />}
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <NavLink
                      to="/stats"
                      style={{ margin: "0px 4px", padding: "0px 10px" }}
                    >
                      <Flex
                        alignItems={"center"}
                        gap="3px"
                        fontSize={"18px"}
                        className={
                          location.pathname === "/stats"
                            ? "link-active"
                            : "link"
                        }
                      >
                        <VscGraph size={"20px"} /> Stats
                      </Flex>
                    </NavLink>
                  </MenuItem>
                  <MenuItem>
                    <NavLink
                      to="/feedback"
                      style={{ margin: "0px 4px", padding: "0px 10px" }}
                      className={
                        location.pathname === "/feedback"
                          ? "link-active"
                          : "link"
                      }
                    >
                      <Flex alignItems={"center"} gap="3px" fontSize={"18px"}>
                        <TbMessageCircle2Filled size={"20px"} /> Feedback
                      </Flex>
                    </NavLink>
                  </MenuItem>
                  {user.email ? (
                    <>
                      <MenuItem>
                        <Flex
                          alignItems={"center"}
                          gap="3px"
                          fontSize={"16px"}
                          onClick={Logout}
                        >
                          Logout <MdLogout size={"20px"} />
                        </Flex>
                      </MenuItem>
                    </>
                  ) : (
                    <>
                      <MenuItem>
                        <NavLink to="/login">
                          <Flex
                            alignItems={"center"}
                            gap="3px"
                            fontSize={"16px"}
                          >
                            Login <MdLogin size={"20px"} />
                          </Flex>
                        </NavLink>
                      </MenuItem>
                      <MenuItem>
                        <NavLink to="/signup">
                          <Flex
                            alignItems={"center"}
                            gap="5px"
                            fontSize={"16px"}
                          >
                            Sign Up <BsPersonCheckFill size={"20px"} />
                          </Flex>
                        </NavLink>
                      </MenuItem>
                    </>
                  )}
                </MenuList>
              </>
            )}
          </Menu>
          <Flex
            alignItems={"center"}
            gap="7px"
            fontSize={"20px"}
            onClick={() => navigate("/")}
            cursor={"pointer"}
          >
            <BsFillCheckCircleFill color="green" /> Pomodoro Clone
          </Flex>
        </Flex>
      ) : (
        <Flex
          borderBottom={"1.5px solid green"}
          p="6px 20px"
          justifyContent={"space-between"}
          alignItems={"center"}
          flexWrap={"wrap"}
        >
          <Flex
            alignItems={"center"}
            gap="7px"
            fontSize={"20px"}
            onClick={() => navigate("/")}
            cursor={"pointer"}
          >
            <BsFillCheckCircleFill color="green" /> Pomodoro Clone
          </Flex>
          <Flex alignItems={"center"} gap="10px">
            <NavLink
              to="/stats"
              style={{ margin: "0px 4px", padding: "0px 10px" }}
            >
              <Flex
                alignItems={"center"}
                gap="3px"
                fontSize={"18px"}
                className={
                  location.pathname === "/stats" ? "link-active" : "link"
                }
              >
                <VscGraph size={"20px"} /> Stats
              </Flex>
            </NavLink>
            <NavLink
              to="/feedback"
              style={{ margin: "0px 4px", padding: "0px 10px" }}
              className={
                location.pathname === "/feedback" ? "link-active" : "link"
              }
            >
              <Flex alignItems={"center"} gap="3px" fontSize={"18px"}>
                <TbMessageCircle2Filled size={"20px"} /> Feedback
              </Flex>
            </NavLink>
            <Menu>
              {({ isOpen }) => (
                <>
                  <MenuButton
                    isActive={isOpen}
                    as={Button}
                    variant={"none"}
                    rightIcon={
                      isOpen ? (
                        <BiChevronUp size={"24px"} />
                      ) : (
                        <BiChevronDown size={"24px"} />
                      )
                    }
                    _hover={{ color: "black" }}
                  >
                    <Flex alignItems={"center"} gap="4px">
                      <BsPersonCircle size={"20px"} />
                      {user.email || "Sign Up / Login"}
                    </Flex>
                  </MenuButton>
                  <MenuList>
                    {user.email ? (
                      <>
                        <MenuItem>
                          <Flex
                            alignItems={"center"}
                            gap="3px"
                            fontSize={"16px"}
                            onClick={Logout}
                          >
                            Logout <MdLogout size={"20px"} />
                          </Flex>
                        </MenuItem>
                      </>
                    ) : (
                      <>
                        <MenuItem>
                          <NavLink to="/login">
                            <Flex
                              alignItems={"center"}
                              gap="3px"
                              fontSize={"16px"}
                            >
                              Login <MdLogin size={"20px"} />
                            </Flex>
                          </NavLink>
                        </MenuItem>
                        <MenuItem>
                          <NavLink to="/signup">
                            <Flex
                              alignItems={"center"}
                              gap="5px"
                              fontSize={"16px"}
                            >
                              Sign Up <BsPersonCheckFill size={"20px"} />
                            </Flex>
                          </NavLink>
                        </MenuItem>
                      </>
                    )}
                  </MenuList>
                </>
              )}
            </Menu>
          </Flex>
        </Flex>
      )}
    </div>
  );
};

export default Navbar;
