const axios = require("axios");
require("dotenv").config();

const API_BASE = process.env.API_BASE;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

const headers = {
  Authorization: `Bearer ${ACCESS_TOKEN}`,
  Accept: "application/json",
};

async function fetchUsers() {
  try {
    const res = await axios.get(`${API_BASE}/users`, { headers });
    return res.data;
  } catch (err) {
    console.error("Error fetching users:", err.response?.data || err.message);
    throw err;
  }
}

async function fetchPosts(userId) {
  try {
    const res = await axios.get(`${API_BASE}/users/${userId}/posts`, { headers });
    return res.data.posts;
  } catch (err) {
    console.error("Error fetching posts:", err.response?.data || err.message);
    return [];
  }
}

async function fetchComments(postId) {
  try {
    const res = await axios.get(`${API_BASE}/posts/${postId}/comments`, { headers });
    return res.data.comments;
  } catch (err) {
    console.error("Error fetching comments:", err.response?.data || err.message);
    return [];
  }
}

module.exports = { fetchUsers, fetchPosts, fetchComments };