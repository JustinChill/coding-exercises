import {users} from "./data/users.ts"
const getAllUserIds = () => {
  const userIds = users.map((u) => u.id);
  return userIds;
};
const userIds = getAllUserIds();
console.log(userIds);