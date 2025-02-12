import { Form, redirect } from "react-router";

export const addUser = async ({ request }) => {
  const formData = await request.formData();

  const newUser = { name: formData.get("name") };

  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: { "Content-Type": "application/json" },
  });

  const result = await response.json();
  console.log("New user response", result);

  return redirect("/");
};

// request.body.name

export const AddUser = () => {
  return (
    <div>
      <h1>Add user</h1>
      <Form method="post">
        <input
          // name is mandatory so we can have it in
          // request.body.name
          name="name"
          type="text"
          placeholder="Type the name of the user"
          required
        />
        <button type="submit">Add user</button>
      </Form>
    </div>
  );
};
