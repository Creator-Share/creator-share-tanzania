import { Box, VStack } from "@chakra-ui/react";
import { ChildCardSkeleton } from "../ChildCard/Skeleton";

const ChildListingsSkeleton = () => {
  return (
    <Box width="100%" className="border" px={{ base: 3, md: 8 }} mt={4}>
      <VStack align="stretch" pt={10}>
        {[1, 2, 3, 4].map((index) => (
          <ChildCardSkeleton key={index} />
        ))}
      </VStack>
    </Box>
  );
};

export default ChildListingsSkeleton;