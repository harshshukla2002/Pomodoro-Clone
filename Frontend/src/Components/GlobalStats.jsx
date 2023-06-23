import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
  Avatar,
} from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";

const Globalstats = () => {
  return (
    <div>
      <TableContainer mt="20px" fontSize={"16px"}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th></Th>
              <Th w="80%">USER</Th>
              <Th>TIME(HH:MM)</Th>
              <Th>POMODOROS</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Th fontSize={"25px"}>1</Th>
              <Td>
                <Flex alignItems={"center"} gap="2px">
                  <Avatar
                    bg="red.500"
                    icon={<AiOutlineUser fontSize="1.5rem" />}
                    size={"md"}
                    borderRadius={"10px"}
                  />
                  chem.exam
                </Flex>
              </Td>
              <Td>08:13</Td>
              <Td>10</Td>
            </Tr>
            <Tr>
              <Th fontSize={"25px"}>2</Th>
              <Td>
                <Flex alignItems={"center"} gap="2px">
                  <Avatar
                    bg="red.500"
                    icon={<AiOutlineUser fontSize="1.5rem" />}
                    size={"md"}
                    borderRadius={"10px"}
                  />
                  eg0rfull
                </Flex>
              </Td>
              <Td>07:18</Td>
              <Td>9</Td>
            </Tr>
            <Tr>
              <Th fontSize={"25px"}>3</Th>
              <Td>
                <Flex alignItems={"center"} gap="2px">
                  <Avatar
                    bg="red.500"
                    icon={<AiOutlineUser fontSize="1.5rem" />}
                    size={"md"}
                    borderRadius={"10px"}
                  />
                  Cactuar Tamer
                </Flex>
              </Td>
              <Td>07:16</Td>
              <Td>18</Td>
            </Tr>
            <Tr>
              <Th fontSize={"25px"}>4</Th>
              <Td>
                <Flex alignItems={"center"} gap="2px">
                  <Avatar
                    bg="red.500"
                    icon={<AiOutlineUser fontSize="1.5rem" />}
                    size={"md"}
                    borderRadius={"10px"}
                  />
                  atsushi nishio
                </Flex>
              </Td>
              <Td>06:52</Td>
              <Td>16</Td>
            </Tr>
            <Tr>
              <Th fontSize={"25px"}>5</Th>
              <Td>
                <Flex alignItems={"center"} gap="2px">
                  <Avatar
                    bg="red.500"
                    icon={<AiOutlineUser fontSize="1.5rem" />}
                    size={"md"}
                    borderRadius={"10px"}
                  />
                  Tour Ty
                </Flex>
              </Td>
              <Td>06:00</Td>
              <Td>06</Td>
            </Tr>
            <Tr>
              <Th fontSize={"25px"}>6</Th>
              <Td>
                <Flex alignItems={"center"} gap="2px">
                  <Avatar
                    bg="red.500"
                    icon={<AiOutlineUser fontSize="1.5rem" />}
                    size={"md"}
                    borderRadius={"10px"}
                  />
                  Shunnya KIMURA
                </Flex>
              </Td>
              <Td>05:52</Td>
              <Td>15</Td>
            </Tr>
            <Tr>
              <Th fontSize={"25px"}>7</Th>
              <Td>
                <Flex alignItems={"center"} gap="2px">
                  <Avatar
                    bg="red.500"
                    icon={<AiOutlineUser fontSize="1.5rem" />}
                    size={"md"}
                    borderRadius={"10px"}
                  />
                  mohamed makram
                </Flex>
              </Td>
              <Td>05:50</Td>
              <Td>14</Td>
            </Tr>
            <Tr>
              <Th fontSize={"25px"}>8</Th>
              <Td>
                <Flex alignItems={"center"} gap="2px">
                  <Avatar
                    bg="red.500"
                    icon={<AiOutlineUser fontSize="1.5rem" />}
                    size={"md"}
                    borderRadius={"10px"}
                  />
                  aman sharma
                </Flex>
              </Td>
              <Td>05:30</Td>
              <Td>6</Td>
            </Tr>
            <Tr>
              <Th fontSize={"25px"}>9</Th>
              <Td>
                <Flex alignItems={"center"} gap="2px">
                  <Avatar
                    bg="red.500"
                    icon={<AiOutlineUser fontSize="1.5rem" />}
                    size={"md"}
                    borderRadius={"10px"}
                  />
                  Bego Minola
                </Flex>
              </Td>
              <Td>05:30</Td>
              <Td>11</Td>
            </Tr>
            <Tr>
              <Th fontSize={"25px"}>10</Th>
              <Td>
                <Flex alignItems={"center"} gap="2px">
                  <Avatar
                    bg="red.500"
                    icon={<AiOutlineUser fontSize="1.5rem" />}
                    size={"md"}
                    borderRadius={"10px"}
                  />
                  Fatma Salim
                </Flex>
              </Td>
              <Td>05:18</Td>
              <Td>8</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Globalstats;
