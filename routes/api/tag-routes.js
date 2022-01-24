const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
     Tag.findAll({
       include: [Product]
     })
          // Access our User model and run .findAll() method)
          .then(dbTag => res.json(dbTag))
          .catch(err => {
            console.log(err);
            res.status(500).json(err);
          });
      });


router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [Product]
  })
     .then(dbTag => res.json(dbTag))
     .catch(err => {
       console.log(err);
       res.status(500).json(err);
     });
 });


router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body).then(dbTag => {
    res.json(dbTag);
  });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  .then((tag) => {
    if (!tag[0]) {
      res.status(404).json({ message: 'No tag found with this id' });
      return;
    }
    res.json(tag);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


  router.delete('/:id', (req, res) => {
    // delete a category by its `id` value
    Tag.destroy({
      where: {
        id: req.params.id
      }
    }).then(Tag => {
      res.json(Tag);
    });
  });


module.exports = router;
