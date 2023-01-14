const router = require("express").Router();
// visits Model
let visitsSchema1 = require("./Models/Visits1");
let visitsSchema2 = require("./Models/Visits2");
let visitsSchema3 = require("./Models/Visits3");
let visitsSchema4 = require("./Models/Visits4");
let visitsSchema5 = require("./Models/Visits5");

// CREATE service
router.post("/create-visits1", (req, res, next) => {
    visitsSchema1.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            console.log("Visits created successfully.", data);
            res.json(data);
        }
    });
});

router.post("/create-visits2", (req, res, next) => {
    visitsSchema2.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            console.log("Visits created successfully.", data);
            res.json(data);
        }
    });
});

router.post("/create-visits3", (req, res, next) => {
    visitsSchema3.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            console.log("Visits created successfully.", data);
            res.json(data);
        }
    });
});

router.post("/create-visits4", (req, res, next) => {
    visitsSchema4.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            console.log("Visits created successfully.", data);
            res.json(data);
        }
    });
});

router.post("/create-visits5", (req, res, next) => {
    visitsSchema5.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            console.log("Visits created successfully.", data);
            res.json(data);
        }
    });
});
// READ visits
router.get("/1", (req, res) => {
    visitsSchema1.find((error, data, next) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});

router.get("/2", (req, res) => {
    visitsSchema2.find((error, data, next) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});

router.get("/3", (req, res) => {
    visitsSchema3.find((error, data, next) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});

router.get("/4", (req, res) => {
    visitsSchema4.find((error, data, next) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});

router.get("/5", (req, res) => {
    visitsSchema5.find((error, data, next) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});
// Update visits Data
router.put("/update-visits1/:id", (req, res, next) => {
    visitsSchema1.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.json(data);
                console.log("Visits updated successfully !", data);
            }
        }
    );
});

router.put("/update-visits2/:id", (req, res, next) => {
    visitsSchema2.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.json(data);
                console.log("Visits updated successfully !", data);
            }
        }
    );
});

router.put("/update-visits3/:id", (req, res, next) => {
    visitsSchema3.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.json(data);
                console.log("Visits updated successfully !", data);
            }
        }
    );
});

router.put("/update-visits4/:id", (req, res, next) => {
    visitsSchema4.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.json(data);
                console.log("Visits updated successfully !", data);
            }
        }
    );
});

router.put("/update-visits5/:id", (req, res, next) => {
    visitsSchema5.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        (error, data) => {
            if (error) {
                return next(error);
            } else {
                res.json(data);
                console.log("Visits updated successfully !", data);
            }
        }
    );
});

module.exports = router;