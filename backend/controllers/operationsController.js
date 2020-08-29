const Operation = require('../models/operations');

exports.createOperation=(req, res, next) => {
    const operation = new Operation({
        titreoperation:req.body.titreoperation,
        entreprise:req.body.entreprise,
        anne_de_livraison:req.body.anne_de_livraison,
        ville:req.body.ville,
        mandataire:req.body.mandataire,
        ppi:req.body.ppi,
        lycee:req.body.lycee,
        notification_du_marche:req.body.notification_du_marche,
        codeuai:req.body.codeuai,
        longitude:req.body.longitude,
        etat_d_avancement:req.body.etat_d_avancement,
        montant_des_ap_votes_en_meu:req.body.montant_des_ap_votes_en_meu,
        cao_attribution:req.body.cao_attribution,
        latitude:req.body.latitude,
        maitrise_d_oeuvre:req.body.maitrise_d_oeuvre,
        mode_de_devolution:req.body.mode_de_devolution,
        annee_d_individualisation:req.body.annee_d_individualisation,
        enveloppe_prev_en_meu:req.body.enveloppe_prev_en_meu
    });
    operation.save().then(
      ()=>{
        res.status(201).json({
          message: 'Post saved succesfully!'
        })
      }
    ).catch(
      (error) => {
        res.status(400).json({
          message : 'Something went wrong'
        });
      }
    );
  };

exports.getOneOperation=(req, res, next) => {
    Operation.findOne({
      _id: req.params.id
    }).then(
      (operation) => {
        res.status(200).json(operation);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
  };

 exports.modifyOperation= (req, res, next) => {
    const operation = new Operation({
      _id: req.params.id,
      titreoperation:req.body.titreoperation,
      entreprise:req.body.entreprise,
      anne_de_livraison:req.body.anne_de_livraison,
      ville:req.body.ville,
      mandataire:req.body.mandataire,
      ppi:req.body.ppi,
      lycee:req.body.lycee,
      notification_du_marche:req.body.notification_du_marche,
      codeuai:req.body.codeuai,
      longitude:req.body.longitude,
      etat_d_avancement:req.body.etat_d_avancement,
      montant_des_ap_votes_en_meu:req.body.montant_des_ap_votes_en_meu,
      cao_attribution:req.body.cao_attribution,
      latitude:req.body.latitude,
      maitrise_d_oeuvre:req.body.maitrise_d_oeuvre,
      mode_de_devolution:req.body.mode_de_devolution,
      annee_d_individualisation:req.body.annee_d_individualisation,
      enveloppe_prev_en_meu:req.body.enveloppe_prev_en_meu

    });
    Operation.updateOne({_id: req.params.id}, operation).then(
      () => {
        res.status(201).json({
          message: 'Thing updated successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

 exports.deleteOperation=(req, res, next) => {
    Operation.deleteOne({_id: req.params.id}).then(
      () => {
        res.status(200).json({
          message: 'Deleted!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

  exports.getAllOperations = (req, res, next) => {
    var ville=req.query.ville;
    var etat_d_avancement=req.query.etat_d_avancement;
    var searchParams={};
    if (ville) searchParams.ville=ville;
    if (etat_d_avancement) searchParams.etat_d_avancement=etat_d_avancement;
    Operation.find(searchParams).then(
      (operations) => {
        res.status(200).json(operations);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };

