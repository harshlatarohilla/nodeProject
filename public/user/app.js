let userId;

const getuserbtn = document.getElementById("getUserbtn");
const editPassword = document.getElementById("editPassword");

// event at button
getuserbtn.addEventListener("click", async () => {
  const username = document.getElementById("username");

  let uname = username.value;
  const result = await fetch("http://localhost:80/api/user/readUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      uname,
    }),
  }).then((res) => res.json());

  userId = result.result[0].userId;

  const fetchedusername = document.getElementById("fetchedusername");
  const fetchedpassword = document.getElementById("fetchedpassword");
  const fetchedname = document.getElementById("fetchedname");
  fetchedusername.value = result.result[0].username;
  fetchedpassword.value = result.result[0].password;
  fetchedname.value = result.result[0].name;

  console.log(result.result[0]);
  console.log(userId);
});
//event at password input
editPassword.addEventListener("click", async () => {
  const newPassword = document.getElementById("fetchedpassword");

  let password = newPassword.value;

  const result = await fetch("http://localhost:80/api/user/modifyUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId,
      password,
    }),
  }).then((res) => res.json());

  console.log(result.result[0]);
});
