function displayTopUsers() {
  const users = [
    {
      name: "Timothy",
      followers: 15430,
    },
    {
      name: "Kylie",
      followers: 4623,
    },
    {
      name: "Barbara",
      followers: 3461,
    },
    {
      name: "Robert",
      followers: 17342,
    },
    {
      name: "Geoffrey",
      followers: 13457,
    },
    {
      name: "Shirley",
      followers: 20987,
    },
    {
      name: "Deborah",
      followers: 938,
    },
    {
      name: "Sylvia",
      followers: 21563,
    },
  ];

  //   const descendingUsers = users.sort((a, b) =>
  //     a.followers < b.followers ? 1 : -1
  //   );
  //   const topFiveUsers = descendingUsers.slice(0, 5);

  //   const listContainer = document.getElementById("list-container");
  //   const listElement = document.createElement("ul");
  //   listContainer.appendChild(listElement);

  //   for (let i = 0; i < topFiveUsers.length; i++) {
  //     const listItem = document.createElement("li");
  //     console.log(topFiveUsers[i].name);
  //     listItem.innerHTML = topFiveUsers[i].name;
  //     listElement.appendChild(listItem);
  //   }
  // }

  // displayTopUsers();

  const descendingUsers = users.sort((a, b) =>
    a.followers < b.followers ? 1 : -1
  );
  const topFiveUsers = descendingUsers.slice(0, 5);

  const listContainer = document.getElementById("list-container");
  console.log(listContainer);
  const listElement = document.createElement("ul");
  listContainer.appendChild(listElement);

  for (let i = 0; i < topFiveUsers.length; i++) {
    const listItem = document.createElement("li");
    console.log(topFiveUsers[i].name);
    listItem.innerHTML = topFiveUsers[i].name;
    listElement.appendChild(listItem);
  }
}

displayTopUsers();
