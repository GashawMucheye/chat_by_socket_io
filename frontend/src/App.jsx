import { Box } from '@chakra-ui/react';
import { io } from 'socket.io-client';
const socket = io.connect('http://localhost:8080');
export default function App() {
  const sendMessage = () => {
    socket.emit('send_message', { message: 'hello' });
  };
  return (
    <Box bg="darkorange">
      <input type="text" placeholder="Enter Your Message..." />
      <button onClick={sendMessage}>Send Message</button>
    </Box>
  );
}
