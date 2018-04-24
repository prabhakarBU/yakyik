var express = require('express');
var router = express.Router();
//var zoneController = require('../controllers/ZoneController');
var controllers = require('../controllers');

router.get('/', function(req,res,next){
    var resource = req.params.resource
    res.json({
        confirmation: 'success',
        resource: resource
    });
});

router.get('/:resource', function(req,res,next){
    var resource = req.params.resource
    var controller = controllers[resource]
    //if no controller found in ../controllers/index.js file 
    if(controller == null){
        res.json({
            confirmation: 'Failed',
            resource: 'No such Resource found ! Invalid Resource : '+resource
        });
        return
    }
    controller.find(req.query, function(err, results){ //results -> payload
        if(err){
            res.json({
                confirmation: 'fail',
                message: err
            });
            return;
        }
        res.json({
            confirmation: 'success',
            results: results
        })
    });

/*
    if(resource == 'zone'){
        zoneController.find(req.query, function(err, results){ //results -> payload
            if(err){
                res.json({
                    confirmation: 'fail',
                    message: err
                });
                return;
            }
            res.json({
                confirmation: 'success',
                results: results
            })
        });
    }
    */
});

router.get('/:resource/:id', function(req,res,next){
    var resource = req.params.resource;
    var id = req.params.id;
    var controller = controllers[resource]
    //if no controller found in ../controllers/index.js file 
    if(controller == null){
        res.json({
            confirmation: 'Failed',
            resource: 'No such Resource found ! Invalid Resource : '+resource
        });
        return
    }
    
        controller.findById(id,function(err,result){
            if(err){
                res.json({
                    confirmation: 'fail',
                    message: 'Not Found'//err
                });
                return;
            }
            res.json({
                confirmation: 'success',
                result: result
            })
        })
    
})

router.post('/:resource',function(req,res,next){
    var resource = req.params.resource;
    var controller = controllers[resource]
    //if no controller found in ../controllers/index.js file 
    if(controller == null){
        res.json({
            confirmation: 'Failed',
            resource: 'No such Resource found ! Invalid Resource : '+resource
        });
        return
    }

        controller.create(req.body,function(err,result){
            if(err){
                res.json({
                    confirmation: 'fail',
                    message: 'Not Found'//err
                });
                return;
            }

            res.json({
                confirmation: 'success',
                message: result
            });

        })
    
})

module.exports = router;