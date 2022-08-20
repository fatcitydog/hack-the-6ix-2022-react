import { create } from 'ipfs-http-client';

const INFURA_PROJECT_ID = "2DcuX39CDAnNrymkEg9em6xHslS";
const INFURA_API_KEY_SECRET = "88feea35d15781cc87d489e4d9dfd37c";
const accessKey = INFURA_PROJECT_ID + ":" + INFURA_API_KEY_SECRET
export const client = create(
    {
        url: "https://ipfs.infura.io:5001", 
        headers: {
            authorization: 
            "Basic " + btoa(accessKey)
        }
    }
);