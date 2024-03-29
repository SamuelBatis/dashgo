import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Samuel Batistela</Text>
          <Text color="gray.300" fontSize="small">
            samuel.batistela11@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Samuel Batistela" src="https://github.com/samuelbatis.png" />
    </Flex>

  );
}
