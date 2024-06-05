import { Box, Button, Container, Flex, Heading, HStack, IconButton, Input, Select, Table, Tbody, Td, Th, Thead, Tr, VStack, Text, Checkbox, Spacer, Avatar } from "@chakra-ui/react";
import { FaBell, FaQuestionCircle, FaUser, FaFilter, FaSort, FaEdit, FaTrashAlt, FaFileImport, FaFileExport } from "react-icons/fa";

const Index = () => {
  return (
    <Flex height="100vh">
      {/* Sidebar */}
      <Box width="20%" bg="gray.100" p={4}>
        <Heading size="md" mb={2}>Project Name</Heading>
        <Text mb={4}>Category</Text>
        <VStack align="start" spacing={4}>
          <Button variant="link">Call Tool</Button>
          <Button variant="link">Invoice Tool</Button>
        </VStack>
      </Box>

      {/* Main Content */}
      <Box flex="1" p={4}>
        {/* Header */}
        <Flex justify="space-between" align="center" mb={4}>
          <Heading size="lg">Data Table</Heading>
          <HStack spacing={4}>
            <Button leftIcon={<FaFileImport />}>Import</Button>
            <Button leftIcon={<FaFileExport />}>Export</Button>
            <Button colorScheme="blue" leftIcon={<FaEdit />}>Add report</Button>
            <IconButton icon={<FaQuestionCircle />} aria-label="Help" />
            <IconButton icon={<FaBell />} aria-label="Notifications" />
            <Avatar icon={<FaUser />} />
          </HStack>
        </Flex>

        {/* Search and Filters */}
        <HStack mb={4} spacing={4}>
          <Input placeholder="Search" />
          <Select placeholder="Category">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </Select>
          <IconButton icon={<FaFilter />} aria-label="Filter" />
          <IconButton icon={<FaSort />} aria-label="Sort" />
        </HStack>

        {/* Data Table */}
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th><Checkbox /></Th>
              <Th>ITEM</Th>
              <Th>VALUE ($)</Th>
              <Th>DATA</Th>
              <Th>DATA</Th>
              <Th>STATUS</Th>
              <Th>ACTION</Th>
            </Tr>
          </Thead>
          <Tbody>
            {Array.from({ length: 10 }).map((_, index) => (
              <Tr key={index}>
                <Td><Checkbox /></Td>
                <Td>Lorem dolore</Td>
                <Td>9,000</Td>
                <Td>Data series</Td>
                <Td>DD/MM/YY</Td>
                <Td><Button size="sm">Status</Button></Td>
                <Td>
                  <HStack spacing={2}>
                    <IconButton icon={<FaEdit />} aria-label="Edit" size="sm" />
                    <IconButton icon={<FaTrashAlt />} aria-label="Delete" size="sm" />
                  </HStack>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>

        {/* Pagination */}
        <Flex justify="space-between" align="center" mt={4}>
          <Text>106 results</Text>
          <HStack spacing={2}>
            <Button size="sm">1</Button>
            <Button size="sm">2</Button>
            <Button size="sm">3</Button>
            <Button size="sm">4</Button>
            <Button size="sm">...</Button>
            <Button size="sm">10</Button>
            <Button size="sm">11</Button>
          </HStack>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Index;