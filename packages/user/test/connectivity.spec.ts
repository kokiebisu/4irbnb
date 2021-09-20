const { Pool } = require("pg");

describe("it", () => {
  it("y", async () => {
    const pool = new Pool({
      host: "database-1.cmkyxohdorvf.us-east-1.rds.amazonaws.com",
      user: "postgres",
      password: "testadmin",
    });

    // the pool with emit an error on behalf of any idle clients
    // it contains if a backend error or network partition happens
    pool.on("error", (err, client) => {
      console.error("Unexpected error on idle client", err); // your callback here
      process.exit(-1);
    });

    // promise - checkout a client
    pool.connect().then((client) => {
      return client
        .query("SELECT * FROM users WHERE id = $1", [1]) // your query string here
        .then((res) => {
          client.release();
          console.log(res.rows[0]); // your callback here
        })
        .catch((e) => {
          client.release();
          console.log(err.stack); // your callback here
        });
    });
  });
});
