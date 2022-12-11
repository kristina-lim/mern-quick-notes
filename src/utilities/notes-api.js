import sendRequest from "./send-request";
const BASE_URL = '/api/notes';

export async function create(noteData) {
  const res = await sendRequest(`${BASE_URL}/new`, 'POST', noteData);
  return res.data;
}

export async function index() {
  const res = await sendRequest(BASE_URL);
  return res.data;
}