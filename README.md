# Live Chat Bot

## Overview
This project is a live chat bot application built using React and TypeScript. It provides a simple interface for users to send and receive messages in real-time.

## Project Structure
```
live-chat-bot
├── public
│   ├── index.html          # Main HTML file
├── src
│   ├── components
│   │   ├── ChatWindow.tsx  # Component for displaying chat messages
│   │   └── MessageInput.tsx # Component for user input
│   ├── App.tsx             # Main application component
│   ├── index.tsx           # Entry point for the React application
│   └── styles
│       └── ChatStyles.css   # CSS styles for the chat interface
├── package.json            # npm configuration file
├── tsconfig.json           # TypeScript configuration file
├── README.md               # Project documentation
└── .gitignore              # Git ignore file
```

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd live-chat-bot
   ```

2. Install the dependencies:
   ```
   npm install
   ```

### Running the Application
To start the development server, run:
```
npm start
```
This will launch the application in your default web browser.

### Building for Production
To create a production build, run:
```
npm run build
```
This will generate optimized files in the `build` directory.

## Usage
Once the application is running, you can interact with the chat interface by sending messages through the input field. The chat window will display all messages in real-time.

## Contributing
Feel free to submit issues or pull requests to improve the project.

## License
This project is licensed under the MIT License.