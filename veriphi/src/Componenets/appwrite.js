import {Client,Account} from "appwrite";
const client=new Client()
.setEndpoint('https://cloud.appwrite.io/v1')
.setProject('668e4f850021cf1eae0d');
const account =new Account(client)
export {account,client}