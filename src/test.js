import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('YwFhvwOWGxqHh666nnEd').collection('cartItems').doc('m3SsdyVnYb3BQ5iUsfvL');
firestore.doc('/users/YwFhvwOWGxqHh666nnEd/cartItems/m3SsdyVnYb3BQ5iUsfvL');
firestore.collection('/users/YwFhvwOWGxqHh666nnEd/cartItems');