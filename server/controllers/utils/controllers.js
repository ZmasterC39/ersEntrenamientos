import { pool } from "../../db.js";


export const getData = (tableName) => async (req, res) => {
    try {
      const [result] = await pool.query(`SELECT * FROM ${tableName}`);
      console.log(result);
      res.json(result);
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  };

  export const getDataById = (tableName, idColumnName) => async (req, res) => {
    try {
      const [result] = await pool.query(`SELECT * FROM ${tableName} WHERE ${idColumnName} = ?`, [req.params.id]);
      if (result.length === 0) {
        return res.status(404).json({ message: `${tableName} not found` });
      }
      res.json(result[0]);
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  };


  export const createData = (tableName) => async (req, res) => {
    try {
      const columns = Object.keys(req.body).join(", ");
      const values = Object.values(req.body);
      const placeholders = new Array(values.length).fill("?").join(", ");
      const sql = `INSERT INTO ${tableName} (${columns}) VALUES (${placeholders})`;
      const [result] = await pool.query(sql, values);
      res.json({ id: result.insertId, ...req.body });
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  };


  export const updateRecord = (tableName) => async (req, res) => {
    try {
      const result = await pool.query(`UPDATE ${tableName} SET ? WHERE id = ?`, [
        req.body,
        req.params.id,
      ]);
      res.json(result);
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  };

  
  export const deleteItem = (tableName) => async (req, res) => {
    try {
      const [result] = await pool.query(`DELETE FROM ${tableName} WHERE id = ?`, [
        req.params.id,
      ]);
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: `${tableName} not found` });
      }
      return res.sendStatus(204);
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  };
  

  









  export const getDatosExacots = (tableName, idColumnName, consulta) => async (req, res) => {
    try {
      const [result] = await pool.query(`SELECT * FROM ${tableName} WHERE ${idColumnName} = ?`, [req.params.id]);
      if (result.length === 0) {
        return res.status(404).json({ message: `${tableName} not found` });
      }
      res.json(result[0]);
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  };





  export const createDataReturnId = (tableName) => async (req, res) => {
    try {
      const columns = Object.keys(req.body).join(", ");
      const values = Object.values(req.body);
      const placeholders = new Array(values.length).fill("?").join(", ");
      const sql = `INSERT INTO ${tableName} (${columns}) VALUES (${placeholders})`;
      const [result] = await pool.query(sql, values);
  
      const [lastInsertedRow] = await pool.query(`SELECT * FROM ${tableName} ORDER BY id DESC LIMIT 1`);
      res.json(lastInsertedRow);
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  };