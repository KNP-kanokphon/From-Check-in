const { ContactsOutlined } = require('@ant-design/icons');
const axios = require('axios');

const urlBackend = `http://localhost:5000`;
const token = localStorage.getItem('token');


async function getProvince(id) {
    try {
        const { data } = await axios.get(`${urlBackend}/api/getProvince`);
        return data;
    } catch (err) {
        console.log(err);
    }
}

async function getGeography() {
    try {
        const { data } = await axios.get(`${urlBackend}/api/getGeography`);
        return data;
    } catch (err) {
        console.log(err);
    }
}

async function getDistrict() {
    try {
        const { data } = await axios.get(`${urlBackend}/api/getDistrict`);
        return data;
    } catch (err) {
        console.log(err);
    }
}

async function getSection() {
    try {
        const { data } = await axios.get(`${urlBackend}/api/getSection`);
        return data;
    } catch (err) {
        console.log(err);
    }
}

async function getSectionByid(idList) {
    try {
        const { data } = await axios.post(`${urlBackend}/api/getSection/list`, idList);
        return data;
    } catch (err) {
        console.log(err);
    }
}


module.exports = {
    getProvince,
    getGeography,
    getDistrict,
    getSection,
    getSectionByid
}
