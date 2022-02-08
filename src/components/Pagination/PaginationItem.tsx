import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
    number: number;
    isCurrent?: boolean;
}

export function PaginationItem({ 
     isCurrent = false,
     number 
    }: PaginationItemProps) {
    if (isCurrent) {
        return (
            <Button
                borderStyle="none"
                color="white"
                size="sm"
                fontSize="xs"
                w="4"
                colorScheme="pink"
                disabled
                _disabled={{
                    bg: 'pink.500',
                    cursor: 'default',
                }}>
                {number}
            </Button>
        );
    }

    return (
        <Button
            borderStyle="none"
            color="white"
            size="sm"
            fontSize="xs"
            w="4"
            bg="gray.700"
            _hover={{
                bg: 'gray.500'
            }}
        >
            {number}
        </Button>
    );
} 