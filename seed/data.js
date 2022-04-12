import db from "../db/connection.js";
import Case from "../models/case.js";
import cases from "./covid.json" assert { type: "json" };

const insertData = async () => {
  // reset database
  await db.dropDatabase();

  // insert characters into database
  await Case.insertMany(cases);

  // close db connection (done)
  db.close();
};

insertData();