import { Box, Tag } from "@chakra-ui/react"

export const IconBg = ({children}) => {
    return (
        <Box  w='full' h='full'>
    <Tag bg={'black'} p={'2vw'} borderRadius={25}>
      {children}
    </Tag>
  </Box>
    )
}