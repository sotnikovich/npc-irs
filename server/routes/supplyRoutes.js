const Router = require("express");
const router = new Router();
const supplyController = require("../controllers/supplyController");

router.post("/supply", supplyController.createSupply);
router.get("/supply", supplyController.getSupplies);
router.get("/supply/:supplies_id", supplyController.getOneSupply);
router.put("/supply", supplyController.updateSupply);
router.delete("/supply/:supplies_id", supplyController.deleteSupply);

module.exports = router;
