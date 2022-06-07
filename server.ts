import dotenv from 'dotenv';
import server from './models/Server';

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config();
// Start the server
server.listen();
