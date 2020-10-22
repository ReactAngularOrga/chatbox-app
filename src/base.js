import Rebase from 're-base'
import firebase from 'firebase'


const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAwoPKX93Z7UbBaK4QMV4bkKSqqgSi_vwQ',
  authDomain: 'chatbox-app-cat.firebaseapp.com',
  databaseURL: 'https://chatbox-app-cat.firebaseio.com/'
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base
