const express = require('express');
const {createPrasad, getAllPrasads, getPrasadDetails, updatePrasad, deletePrasad} = require("../controllers/prasadController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


const router = express.Router();

router.route("/admin/prasad/new").post(isAuthenticatedUser, authorizeRoles("admin"), createPrasad);
router.route("/prasads").get(getAllPrasads);

router.route("/prasad/:id").get(getPrasadDetails);

router.route("/admin/prasad/:id")
    .put(isAuthenticatedUser, authorizeRoles("admin"), updatePrasad)
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deletePrasad);



module.exports = router;

