import { initializeApp } from "firebase/app";
import { arrayUnion, collection, getFirestore, setDoc } from "firebase/firestore";
import { doc, getDoc, addDoc, updateDoc } from "firebase/firestore"; 

const firebaseConfig = {
    apiKey: "AIzaSyBxZ1xuyEYuS1UklqMN5-DzJfrLrOO64vY",
    authDomain: "roleapp-664c4.firebaseapp.com",
    projectId: "roleapp-664c4",
    storageBucket: "roleapp-664c4.appspot.com",
    messagingSenderId: "174127674816",
    appId: "1:174127674816:web:64a5ab56af0273ba0b0425"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function addParticipante(id: number, nome: string) {
    try {
        await updateDoc(doc(db, "participantes", `${id}`), {
            nomes: arrayUnion(nome)
        });
        console.log("Document written with ID: ");
        
    } catch (e) {
        console.error("Error adding document: ", e);
        console.error("Creating new...")
        await setDoc(doc(db, "participantes", `${id}`), {nomes: [nome]})
    }
    return
}

async function getParticipantes(id: number){
    const docRef = doc(db, "participantes", `${id}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        return docSnap.data()
    } else {
    // docSnap.data() will be undefined in this case
        console.log("No such document!");
        throw "erro"
    }
}

async function criarEvento(
    nome: string, 
    data: string, 
    descricao: string, 
    local: string, 
    endereco: string, 
    valor: string ) 
    {
        try{
            await addDoc(collection(db, "eventos"), {
                nome,
                data,
                descricao,
                local,
                endereco,
                valor,
                nomes: []
            })
        } catch (e) {
            console.log(e)
        }
    }

export {addParticipante, getParticipantes, criarEvento}