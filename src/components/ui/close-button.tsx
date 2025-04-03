import { CloseButton as ChakraCloseButton } from "@chakra-ui/react"
import * as React from "react"

interface CloseButtonProps extends React.ComponentProps<typeof ChakraCloseButton> {}

export const CloseButton = (props: CloseButtonProps) => {
  return <ChakraCloseButton {...props} />
}
