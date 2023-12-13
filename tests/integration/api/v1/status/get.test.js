test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  const { updated_at, dependencies } = responseBody;

  expect(updated_at).toBeDefined();

  const parsedUpdatedAt = new Date(updated_at).toISOString();
  expect(updated_at).toEqual(parsedUpdatedAt);

  expect(dependencies.database.version).toEqual("16.0");

  expect(dependencies.database.max_connections).toEqual(100);

  console.log(dependencies.database.opened_connections);
  expect(dependencies.database.opened_connections).toEqual(1);
});
