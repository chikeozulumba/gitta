import { JSDOM } from 'jsdom';
import firebase from 'firebase';
// import './firebaseMock';
import './axiosMock';

const documentHTML = '<!doctype html><html><body><div id="root"></div></body></html>';
global.document = new JSDOM(documentHTML);
global.window = document.parentWindow;

const div = document.createElement('div');
global.document.getElementById = id => id === 'app' && div;
global.document.querySelector = () => div;

const mockGeolocation = {
    getCurrentPosition: jest.fn(),
    watchPosition: jest.fn()
};

const mockClipboard = {
    writeText: (url) => {
        return new Promise(resolve => resolve(url), reject => reject(url))
    }
};

global.navigator.geolocation = mockGeolocation;
global.navigator.clipboard = mockClipboard;

