import {Client,Account} from "appwrite";
const client=new Client()
.setEndpoint('')
.setProject('');
const account =new Account(client)
export {account,client}
