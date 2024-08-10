const { exec } = require("node:child_process")

function checkPostgres() {
  exec('docker exec postgres-dev pg_isready --host localhost', handleReturn)

  function handleReturn(error, stdout) {
    if (stdout.search("accepting connections") === -1) {
      console.log("Not accepting connections yet");
      process.stdout.write(".")
      checkPostgres()
      return;
    }

    console.log("\n🟢 Postgres is ready and accepting connection\n")
  }
}

process.stdout.write("\n\n🔴 Waiting for Postgress to accept connections");
checkPostgres();