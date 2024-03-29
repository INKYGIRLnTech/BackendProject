const express = require('express');
const router = express.Router();
const { requiresAuth } = require('express-openid-connect');

router.get('/', requiresAuth(), async (req, res) => {
    res.json(req.oidc.user)
});

module.exports = router;