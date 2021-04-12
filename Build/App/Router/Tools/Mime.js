"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Extension_1 = require("../../../Data/Statics/Extension");
const MimeType_1 = require("../../../Data/Statics/MimeType");
class Mime {
    constructor(path) {
        this.path = path;
    }
    getExtension() {
        const index = this.path.lastIndexOf(".");
        const ext = this.path.substr(index + 1);
        return ext;
    }
    getMime() {
        switch (this.getExtension()) {
            case Extension_1.EXTENSION.HTML:
                return MimeType_1.MIME_TYPE.TEXT_HTML;
            case Extension_1.EXTENSION.XML:
                return MimeType_1.MIME_TYPE.TEXT_XML;
            case Extension_1.EXTENSION.CSS:
                return MimeType_1.MIME_TYPE.TEXT_CSS;
            case Extension_1.EXTENSION.JPG:
                return MimeType_1.MIME_TYPE.IMAGE_JPEG;
            case Extension_1.EXTENSION.PNG:
                return MimeType_1.MIME_TYPE.IMAGE_PNG;
            case Extension_1.EXTENSION.GIF:
                return MimeType_1.MIME_TYPE.IMAGE_GIF;
            case Extension_1.EXTENSION.ICO:
                return MimeType_1.MIME_TYPE.IMAGE_X_ICON;
            case Extension_1.EXTENSION.MP4:
                return MimeType_1.MIME_TYPE.VIDEO_MP4;
            case Extension_1.EXTENSION.MP3:
                return MimeType_1.MIME_TYPE.AUDIO_MPEG;
            case Extension_1.EXTENSION.JS:
                return MimeType_1.MIME_TYPE.APPLICATION_JAVASCRIPT;
            case Extension_1.EXTENSION.JSON:
                return MimeType_1.MIME_TYPE.APPLICATION_JSON;
            default:
                return MimeType_1.MIME_TYPE.TEXT_PLAIN;
        }
    }
}
exports.default = Mime;
//# sourceMappingURL=Mime.js.map