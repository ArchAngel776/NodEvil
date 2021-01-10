"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
            case "html":
                return MimeType_1.MIME_TYPE.TEXT_HTML;
            case "xml":
                return MimeType_1.MIME_TYPE.TEXT_XML;
            case "css":
                return MimeType_1.MIME_TYPE.TEXT_CSS;
            case "jpg":
                return MimeType_1.MIME_TYPE.IMAGE_JPEG;
            case "png":
                return MimeType_1.MIME_TYPE.IMAGE_PNG;
            case "gif":
                return MimeType_1.MIME_TYPE.IMAGE_GIF;
            case "ico":
                return MimeType_1.MIME_TYPE.IMAGE_X_ICON;
            case "mp4":
                return MimeType_1.MIME_TYPE.VIDEO_MP4;
            case "mp3":
                return MimeType_1.MIME_TYPE.AUDIO_MPEG;
            case "js":
                return MimeType_1.MIME_TYPE.APPLICATION_JAVASCRIPT;
            case "json":
                return MimeType_1.MIME_TYPE.APPLICATION_JSON;
            default:
                return MimeType_1.MIME_TYPE.TEXT_PLAIN;
        }
    }
}
exports.default = Mime;
