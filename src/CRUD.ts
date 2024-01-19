import { initializeApp } from "firebase/app";
import { 
    arrayUnion, collection, getFirestore, setDoc, doc, getDoc, addDoc, updateDoc
} from "firebase/firestore"; 

import { PropriedadesEvento } from "./interfaces.ts"

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
        await updateDoc(doc(db, "eventos", `${id}`), {
            nomes: arrayUnion(nome)
        });
        console.log("Document written with ID: ");
        
    } catch (e) {
        console.error("Error adding document: ", e);
    }
    return
}

async function getParticipantes(id: number){
    const docRef = doc(db, "eventos", `${id}`);
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

async function getPropriedadesEvento(id: string) : Promise<PropriedadesEvento> {
    const docRef = doc(db, "eventos", `${id}`);
    let docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        let data = docSnap.data()
        return {
            nome: data["nome"],
            data: data["data"],
            descricao: data["descricao"],
            local: data["local"],
            endereco: data["endereco"],
            valor: data["valor"]
        }
    } else {
    // docSnap.data() will be undefined in this case
        console.log("No such document!");
        throw "erro"
    }
}

export {addParticipante, getParticipantes, criarEvento, getPropriedadesEvento}