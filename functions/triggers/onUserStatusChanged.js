const functions = require('firebase-functions');
const admin = require('firebase-admin');

const db = admin.firestore();

exports.onUserStatusChanged = functions.database
  .ref('status/{userId}')
  .onUpdate((change, context) => {
    const evtStatus = change.after.val();
    const userDoc = db.doc(`users/${context.params.userId}`);

    return change.after.ref.once('value').then(snapshot => {
      const status = snapshot.val();
      if (status.lastChanged > evtStatus.lastChanged) {
        return;
      }
      evtStatus.lastChanged = new Date(evtStatus.lastChanged);
      userDoc.update({ status: evtStatus});
    })
  })