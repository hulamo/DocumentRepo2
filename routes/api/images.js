// Copyright 2017, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';



const Storage = require('@google-cloud/storage');
const config = require('./config');

const CLOUD_BUCKET = config.get('CLOUD_BUCKET');

const FILE = {
    "type": "service_account",
    "project_id": "prime-micron-247216",
    "private_key_id": "e852c574bd2e9a5788d346cbfccad8137c2850ec",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCmOo9GDEBVRrtU\ntCMrei2j4C91T4h8znlyR0koI/GkNdE3fkk/Zr1qG8BEFMwRZmEEDDui3V10i0QE\n5Z6fZSXbIKuv6kh7mT3jy6uBMvBIeZFLJx9YkdBdUhX0Rbp98aRiIPTQufPFBzzD\npB9Iy0hkfnonQ2vhVNDYgGhBAzsJDX47Ztct4upsV0ZUz4eo5T/Wuzf6oM/fbYRU\ngdxhBheWFjHmkhQncv3O1+/1ojB+TvRIfZgQuOgQtyxmIAm47h9U5t2EgFAwvi01\nGKTfaP89yM+BpH0AWz0i2OT4I2aUpC+zfoLWs5irmYMvp/b6HpHasoAWardKcJou\nSd3Rh4qfAgMBAAECggEAH2MGQ4UzroZk/8jlrSNsM7m0bFOgo2Q/JTdVlmk3CrkI\nsJA9V2XYVQ05YAGHSK/KmL+QkR94MnXLWZtbuKAaJkaEdHppxkC4oWcHEqWiHiUq\nLIUOE6SwsbY6o/14iahTUB4F69V4tFa5//zg1Vdg62zANuKxn4Hqzz5rsP7hqkMe\nbLgWHlUBv4RH4jI87jFWwfpTxN0IQNXLYA2XA2X4Xf7v8dhKl110wjnBvS38h6rb\noTO3rVDvrlV53ZIyytqGYfLadgngriCCHNipGoW1iTRCOTB13sVQmAjNaLL/IsEt\nln3SAol7bmOnxqFP5Tbv0GwvKSq7XjKV+6RUnNb+3QKBgQDa9Tsda4Ubx1ESKpG8\ncNmoOBOmz4xDemvG3QbRwi+cn+J9lv+h1s5jBgSDWYZHWUcL8RvUbjDbyyjSqdb/\nYQ+RRgBG8/y/TskIdHBOAlh1Bg4+JKi5Q5ttY6F8NJLG/klIYRPNUgCGca/pPa6z\nKn6Mm1oJqQMJO0S1Qn033N0vHQKBgQDCWbMj7iOXIPFngyo7IWhI2EH5mIsDntvl\n33p7Ro2qGW/qyTtHvInqOLRkuABxhnD2xQ+YWwL+udvs4DVL+/fPSX5oH3LYg4Oq\notSh+g/y+L/S8b60H6dCDLRSoMfPrlipiNvBygOJY9rjk8KTj8P+7iV3N3F+2fQL\nRXlf/ymH6wKBgQCjNrG+GGu8bTLNa9X+tdBJSKO9cHCJzDOSpSd0LF/5TGU0YN5k\n8Q4fWlj64Dzr6my/RhcMnqbk7+eaQOf2rY9BJwEF4tHAeSX5m3IrdCwj70OmpwTu\nNKsjO2UghL/0fZB614I/RqUFkrEiF8yl2UND5HmVQdr1gqyQwOM+RPDLMQKBgAiF\n2n9G4DSucyew7tcs/d/D7BDACcic3NPV2w8w5uGAwBGxxXG96OZmmjKYhxxzYtzP\ng4GQ7C6zg9t9cZjlcdabSHnUdzrbeZiwD1cTGkPzeKYNh+lqQfF5kSbWeiy3XpgA\nsnJrI4CQ6nZ0cmH6OgQh+W6i9c00Tal44Hu/OtkFAoGAYSwvWimCglzrKZ7DnF/K\n9iY4cMJyeXIHGBrYdfluzVMn4qFmnv7t9ydoOTh9fFq64SLXjyo5rVaS2sRtqKkQ\nChBY0yiMr/oFlC3CQM/l4W3aJLWGJggEiM+gXmRSwa0hSq13CLpUnUml6foL1bdn\np0HXHf/295C3qtn0eLY3hXs=\n-----END PRIVATE KEY-----\n",
    "client_email": "documentrepo@prime-micron-247216.iam.gserviceaccount.com",
    "client_id": "107089123590995195866",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/documentrepo%40prime-micron-247216.iam.gserviceaccount.com"
}

const storage = Storage({
    //projectId: config.get('GCLOUD_PROJECT'),
    projectId: "prime-micron-247216",
    keyFilename: "./config/keyFile.json"
});
const bucket = storage.bucket(CLOUD_BUCKET);

// Returns the public, anonymously accessable URL to a given Cloud Storage
// object.
// The object's ACL has to be set to public read.
// [START public_url]
function getPublicUrl(filename) {
    return `https://storage.googleapis.com/${CLOUD_BUCKET}/${filename}`;
}
// [END public_url]

// Express middleware that will automatically pass uploads to Cloud Storage.
// req.file is processed and will have two new properties:
// * ``cloudStorageObject`` the object name in cloud storage.
// * ``cloudStoragePublicUrl`` the public url to the object.
// [START process]
function sendUploadToGCS(req, res, next) {
    if (!req.file) {
        return next();
    }

    const gcsname = Date.now() + req.file.originalname;
    const file = bucket.file(gcsname);

    const stream = file.createWriteStream({
        metadata: {
            contentType: req.file.mimetype
        },
        resumable: false
    });

    stream.on('error', (err) => {
        req.file.cloudStorageError = err;
        next(err);
    });

    stream.on('finish', () => {
        req.file.cloudStorageObject = gcsname;
        file.makePublic().then(() => {
            req.file.cloudStoragePublicUrl = getPublicUrl(gcsname);
            next();
        });
    });

    stream.end(req.file.buffer);
}
// [END process]

// Multer handles parsing multipart/form-data requests.
// This instance is configured to store images in memory.
// This makes it straightforward to upload to Cloud Storage.
// [START multer]


const Multer = require('multer');
const multer = Multer({
    storage: Multer.MemoryStorage,
    limits: {
        fileSize: 5 * 1024 * 1024 // no larger than 5mb
    }
});
// [END multer]

module.exports = {
    getPublicUrl,
    sendUploadToGCS,
    multer
};