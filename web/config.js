// Where the backend WebSocket lives.
// Running locally (localhost or opening the file directly) → the local uvicorn server.
// Anywhere else (the Netlify site) → the backend hosted on Render.
const LOCAL_HOSTS = ["localhost", "127.0.0.1", ""];

window.BACKEND_URL = LOCAL_HOSTS.includes(location.hostname)
  ? "ws://localhost:8000/ws"
  : "wss://shited-backend.onrender.com/ws";
