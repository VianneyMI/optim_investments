const mongoose = require('mongoose');

const operationSchema = mongoose.Schema({
    titreoperation:{type: String, required: true},
    entreprise:{type: String, required: false},
    anne_de_livraison:{type: Number, required: false},
    ville:{type: String, required: true},
    mandataire:{type: String, required: true},
    ppi:{type:String, required:false},
    lycee:{type:String, required:true},
    notification_du_marche:{type: Date, require:true},
    codeuai:{type:String, required:true},
    longitude:{type:Number, required:true},
    etat_d_avancement:{type:String, required:true},
    montant_des_ap_votes_en_meu:{type:String, required:false},
    cao_attribution:{type:Date, required:true},
    latitude:{type:Number, required:true},
    maitrise_d_oeuvre:{type:String, required:false},
    mode_de_devolution:{type:String,required:false},
    annee_d_individualisation:{type:Date, required:true},
    enveloppe_prev_en_meu:{type:Number,required:true}
});

module.exports=mongoose.model('Operation', operationSchema);