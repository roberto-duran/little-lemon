import {
  Button,
  ButtonGroup,
  Container,
  Image,
  Box,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <footer>
      <Container maxW="container.lg" as="footer" role="contentinfo">
        <Stack
          spacing="8"
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          py={{ base: "2", md: "4" }}
        >
          <Stack spacing="4" minW="36" flex="1">
            <Box>
              <Image src="./images/logo.png" height={52} />
            </Box>
          </Stack>
          <Stack spacing="4" minW="36" flex="1">
            <Text fontSize="sm" fontWeight="semibold" color="subtle">
              Doormat Navigation
            </Text>
            <Stack spacing="3" shouldWrapChildren>
              <Button variant="link">Home</Button>
              <Button variant="link">About</Button>
              <Button variant="link">Reservations</Button>
              <Button variant="link">Order Online</Button>
              <Button variant="link">Login</Button>
            </Stack>
          </Stack>
          <Stack spacing="4" minW="36" flex="1">
            <Text fontSize="sm" fontWeight="semibold" color="subtle">
              Contact
            </Text>
            <Stack spacing="3" shouldWrapChildren>
              <Button variant="link">Address</Button>
              <Button variant="link">Phone Number</Button>
              <Button variant="link">Email</Button>
            </Stack>
          </Stack>
          <Stack spacing="4">
            <Text fontSize="sm" fontWeight="semibold" color="subtle">
              Stay up to date
            </Text>
            <Stack spacing="3" shouldWrapChildren>
              <Button variant="link">Address</Button>
              <Button variant="link">Phone Number</Button>
              <Button variant="link">Email</Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
      )
    </footer>
  );
}