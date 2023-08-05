import axios from "axios";

const Fetch = axios.create({
  baseURL: "http://ec2-18-224-16-95.us-east-2.compute.amazonaws.com:1337/api",
})
export default Fetch;