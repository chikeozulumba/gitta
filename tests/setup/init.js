import { JSDOM } from 'jsdom';

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

global.navigator.geolocation = mockGeolocation;