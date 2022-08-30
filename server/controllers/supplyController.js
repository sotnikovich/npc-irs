const db = require("../db");

class SupplyController {
  async createSupply(req, res) {
    const {
      supplies_id,
      naim_org,
      adr_fact,
      inn,
      plazma_max,
      plazma_price,
      erm_max,
      erm_price,
      immg_max,
      immg_price,
      alb_max,
      alb_price,
    } = req.body;
    const newSupply = await db.query(
      `INSERT INTO supplies (supplies_id, naim_org,
      adr_fact,
      inn,
      plazma_max,
      plazma_price,
      erm_max,
      erm_price,
      immg_max,
      immg_price,
      alb_max,
      alb_price) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *`,
      [
        supplies_id,
        naim_org,
        adr_fact,
        inn,
        plazma_max,
        plazma_price,
        erm_max,
        erm_price,
        immg_max,
        immg_price,
        alb_max,
        alb_price,
      ]
    );
    return res.json(newSupply.rows[0]);
  }
  async getSupplies(req, res) {
    const supplies = await db.query(`SELECT * FROM supplies`);
    res.json(supplies.rows);
  }
  async getOneSupply(req, res) {
    const id = req.params.supplies_id;
    const supply = await db.query(
      `SELECT * FROM supplies where supplies_id = $1`,
      [id]
    );
    res.json(supply.rows[0]);
  }
  async updateSupply(req, res) {
    const {
      supplies_id,
      naim_org,
      adr_fact,
      inn,
      plazma_max,
      plazma_price,
      erm_max,
      erm_price,
      immg_max,
      immg_price,
      alb_max,
      alb_price,
    } = req.body;
    const supply = await db.query(
      "UPDATE supplies set naim_org = $2, adr_fact = $3, inn = $4, plazma_max = $5, plazma_price = $6, erm_max = $7, erm_price = $8, immg_max = $9, immg_price = $10, alb_max = $11, alb_price = $12 where supplies_id = $1 RETURNING *",
      [
        supplies_id,
        naim_org,
        adr_fact,
        inn,
        plazma_max,
        plazma_price,
        erm_max,
        erm_price,
        immg_max,
        immg_price,
        alb_max,
        alb_price,
      ]
    );
    res.json(supply.rows[0]);
  }
  async deleteSupply(req, res) {
    const id = req.params.supplies_id;
    const supply = await db.query(
      `DELETE FROM supplies where supplies_id = $1`,
      [id]
    );
    res.json(supply.rows[0]);
  }
}

module.exports = new SupplyController();
